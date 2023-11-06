import { Route, Routes } from "react-router-dom"
import ArticlesPage from "./Articles"
import Content from "../Content"

const Pages = () => {
  return (
    <main>
        <Routes>
          <Route element={<Content />} path="/"/>
          <Route element={<ArticlesPage />} path="/articles"/>
        </Routes>
    </main>
  )
}

export default Pages