import { Outlet } from "react-router"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"

export function Layout() {
    return <section className="">
        <Header />
        <Outlet />
        <Footer />
    </section>
}
