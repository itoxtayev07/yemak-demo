import { Outlet } from "react-router"
import { Header, Footer } from "../components"

export function Layout() {
    return <section className="pages-wrap w-full max-w-full min-h-full flex flex-col gap-[52px]">
        <Header />
        <Outlet />
        <Footer />
    </section>
}
