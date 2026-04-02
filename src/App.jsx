import { Routes, Route } from "react-router"
import { Layout } from './Layout/Layout'
import { Header } from "./components/Header/Header"

export function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Header />} />
        </Route>
      </Routes>
    </>
  )
}
