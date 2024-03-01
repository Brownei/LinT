import './Layout.scss'
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <main id="body">
          <Nav />
          <Outlet />
        </main>
    )
}