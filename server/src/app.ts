import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares';
import api from './api';
import MessageResponse from './interfaces/MessageResponse';
import { sequelize } from './utils/database';

require('dotenv').config();

const app = express();
const corsOrigin = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}

app.use(morgan('dev'));
app.use(helmet());
app.use(cors(corsOrigin));
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Connected successfully!',
  });
});

//Synchronize all models created to the database
sequelize.sync({ force: false }).then(() => {
  console.log("Synchronization successful");
}).catch((error: unknown) => {
  console.log("Error with the synchronization", error);
});

app.use('/', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;