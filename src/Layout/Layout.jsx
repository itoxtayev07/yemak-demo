import { Outlet } from "react-router"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"

export function Layout() {
    return <section className="pages-wrap w-full max-w-full min-h-full flex flex-col gap-[52px]">
        <Header />
        <Outlet />
        <Footer />
    </section>
}
