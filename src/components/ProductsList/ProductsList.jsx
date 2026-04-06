import { memo } from "react"

export const ProductsList = memo(function ProductsList({ selectedProduct, photo, name, price }) {
    return <article
        onClick={selectedProduct}
        className="product w-full max-w-[172px] rounded-[16px] overflow-hidden bg-[#fff] cursor-pointer">
        <img className="w-[172px] h-[172px] rounded-[16px] object-cover object-center" src={photo} />

        <div className="product-info !pt-[8px] !px-[12px] !pb-[12px]">
            <h5 className="!mb-[20px] text-[#12282F] text-[14px] font-semibold leading-[130%] tracking-normal">{name}</h5>
            <span className="text-[#12282F] text-[18px] font-bold leading-[100%] tracking-normal">{price}</span>
        </div>
    </article>
})