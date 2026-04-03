import { useParams } from "react-router"
import { createPortal } from "react-dom"
import { useState, useEffect } from 'react'
import loading from '../../assets/loading-infinity.svg'

export function RestaurantProducts() {
    const [detail, setDetail] = useState()
    const [selectedProduct, setSelectedProduct] = useState()

    let { slug } = useParams()

    const fetchProducts = () => {
        fetch(`https://api.yemak.uz/user/restaurant/product?id=${slug}`)
            .then(data => data.json()).then(res => setDetail(res))
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    if (!detail) return <div className="loading-wrap min-w-full min-h-full absolute flex items-center justify-center z-[15] bg-[#F7F7F7]">
        <img src={loading} className='w-[300px] h-[300px] self-center' />
    </div>

    console.log(detail);


    return <main className="product-page page w-full max-w-full flex justify-center items-center">
        <section className="product-sect w-full max-w-[1080px] flex flex-col gap-[24px]">

            {detail.data.products.map((product) => (
                <section key={product.id} className="category-products">
                    <h3 className="block-title !mb-[16px] text-[#12282F] text-[24px] font-bold leading-[100%] tracking-normal">{product.title}</h3>

                    <section className="products-list flex flex-wrap gap-x-[12px] gap-y-[24px]">
                        {product.products.map((mainProduct) => (
                            <>
                                <article
                                    key={mainProduct.id}
                                    onClick={() => setSelectedProduct(mainProduct)}
                                    className="product w-full max-w-[172px] rounded-[16px] overflow-hidden bg-[#fff]">
                                    <img className="w-[172px] h-[172px] rounded-[16px] object-cover object-center" src={mainProduct.photo} />

                                    <div className="product-info !pt-[8px] !px-[12px] !pb-[12px]">
                                        <h5 className="!mb-[20px] text-[#12282F] text-[14px] font-semibold leading-[130%] tracking-normal">{mainProduct.name}</h5>
                                        <span className="text-[#12282F] text-[18px] font-bold leading-[100%] tracking-normal">{mainProduct.price}</span>
                                    </div>
                                </article>
                            </>
                        ))}
                    </section>
                </section>
            ))}
        </section>

        {selectedProduct && createPortal(
            <section
                className="modal-wrap fixed top-[0] left-[0] w-full max-w-full h-full z-[9999] bg-[#0D0D0DE0] flex items-center justify-center"
                onClick={(e) => {
                    if (e.target.localName === 'section') setSelectedProduct()
                }}>
                <div className="modal w-[750px] bg-[#FFF] rounded-[20px]">
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
}
