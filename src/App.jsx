import { useState, useEffect, useCallback } from "react"
import { Routes, Route } from "react-router"

import { Layout } from './Layout/Layout'
import { Home, RestaurantProducts } from "./pages"

import loading from './assets/loading-infinity.svg'

export function App() {
  const [data, setData] = useState()

  const fetchProducts = useCallback(() => {
    fetch('https://api.yemak.uz/user/restaurant')
      .then(data => data.json()).then(res => setData(res))
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  if (!data) return <div className="loading-wrap min-w-full min-h-full flex items-center justify-center">
    <img src={loading} className='w-[300px] h-[300px]' />
  </div>

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home products={data} />} />
          <Route path='/qarshi/:slug' element={<RestaurantProducts />} />
        </Route>
      </Routes>
    </>
  )
}
