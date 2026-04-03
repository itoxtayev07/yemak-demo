import { Routes, Route } from "react-router"
import { Layout } from './Layout/Layout'

export function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
        </Route>
      </Routes>
    </>
  )
}
