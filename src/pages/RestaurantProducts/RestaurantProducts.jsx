import { useParams, useLocation } from "react-router"
import { createPortal } from "react-dom"
import { useState, useEffect, memo, useCallback } from 'react'
import { ProductsList } from "../../components"

import loading from '../../assets/loading-infinity.svg'

export const RestaurantProducts = memo(function RestaurantProducts() {
    const [detail, setDetail] = useState()
    const [selectedProduct, setSelectedProduct] = useState()

    let { slug } = useParams()
    let { state } = useLocation()

    const fetchProducts = useCallback(() => {
        fetch(`https://api.yemak.uz/user/restaurant/product?id=${slug}`)
            .then(data => data.json()).then(res => setDetail(res))
    }, [slug])

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    const handleModalClose = useCallback((e) => {
        if (e.target.localName === 'section') setSelectedProduct()
    }, [])

    if (!detail) return <div className="loading-wrap min-w-full min-h-full absolute flex items-center justify-center z-[15] bg-[#F7F7F7]">
        <img src={loading} className='w-[300px] h-[300px] self-center' />
    </div>

    return <main className="product-page page w-full max-w-full flex justify-center items-center">
        <section className="product-sect w-full max-w-[1080px] flex flex-col gap-[24px]">

            <section className={`restaurant-banner-sect w-full max-w-full rounded-[20px] overflow-hidden bg-[url(${state.img})] bg-no-repeat bg-cover bg-center text-[#FFF]`}>

                <div className="restaurant-info min-h-[235px] !p-[20px] flex flex-col justify-end bg-[#14141480]">
                    <h1 className="!mb-[12px] text-[32px] font-bold leading-[100%] tracking-normal">{state.name}</h1>

                    <div className="work-time-card max-w-max !p-[8px_12px] flex items-center gap-[8px] rounded-[12px] border-[1.5px_2.5px_2.5px_1.5px] border-[#FFFFFF14] bg-[#FFFFFF1A] shadow-[0px_6px_20px_0px_#12282F0F]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                            <path fill="#B0B7BA" d="M12 12h-1a1 1 0 0 0 .684.949zm1-5a1 1 0 1 0-2 0zm1.684 6.949a1 1 0 0 0 .632-1.898zM13 12V7h-2v5zm-1.316.949 3 1 .632-1.898-3-1zM21 12a9 9 0 0 1-9 9v2c6.075 0 11-4.925 11-11zm-9 9a9 9 0 0 1-9-9H1c0 6.075 4.925 11 11 11zm-9-9a9 9 0 0 1 9-9V1C5.925 1 1 5.925 1 12zm9-9a9 9 0 0 1 9 9h2c0-6.075-4.925-11-11-11z"></path>
                        </svg>

                        <div className="leading-[16px]">
                            <h4 className="text-[14px] font-bold tracking-normal">{`${state.work_time_from}-${state.work_time_to}`}</h4>
                            <span className="text-[13px] font-bold tracking-normal">ish vaqti</span>
                        </div>
                    </div>
                </div>

            </section>

            {detail.data.products.map((product) => (
                <section key={product.id} className="category-products">
                    <h3 className="block-title !mb-[16px] text-[#12282F] text-[24px] font-bold leading-[100%] tracking-normal">{product.title}</h3>

                    <section className="products-list flex flex-wrap gap-x-[12px] gap-y-[24px]">
                        {product.products.map((mainProduct) => (<ProductsList key={mainProduct.id} selectedProduct={() => setSelectedProduct(mainProduct)} photo={mainProduct.photo} name={mainProduct.name} price={mainProduct.price} />))}
                    </section>
                </section>
            ))}
        </section>

        {selectedProduct && createPortal(
            <section
                className="modal-wrap fixed top-[0] left-[0] w-full max-w-full h-full z-[9999] bg-[#0D0D0DE0] flex items-center justify-center"
                onClick={handleModalClose}>
                <div className="modal w-[750px] min-h-[565.88px] flex flex-col justify-end bg-[#FFF] rounded-[20px]">
                    <img className="w-full rounded-[20px]" src={selectedProduct.photo} />

                    <div className="modal-info !p-[32px] !pt-[24px]">
                        <h5 className="!mb-[20px] text-[#12282F] text-[32px] font-semibold leading-[130%] tracking-normal">{selectedProduct.name}</h5>
                        <span className="text-[#12282F] text-[24px] font-bold leading-[100%] tracking-normal">{selectedProduct.price}</span>
                    </div>
                </div>
            </section>,
            document.body
        )}
    </main >
})
