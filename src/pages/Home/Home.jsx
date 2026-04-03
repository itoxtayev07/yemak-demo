import { useNavigate } from "react-router"

export function Home({ products }) {

    let navigate = useNavigate()

    return <main className="home-page page w-full max-w-full !px-[24px] flex flex-col items-center">
        <section className="main-sect w-full max-w-[1080px]">
            <h2 className="block-title text-[#12282F] text-[32px] font-bold leading-[130%] tracking-normal">Restoranlar</h2>

            <section className="restaurant-list w-full max-w-full !mt-[20px] flex flex-wrap gap-[24px]">
                {products.data.restaurants.map((product, ind) => (

                    <article key={ind} className="restaurant-card w-full max-w-[344px] rounded-[16px] overflow-hidden border-[1px] border-[#F0F0F0] bg-[#FFF] cursor-pointer" onClick={() => navigate(`/qarshi/${product.id}`)}>
                        <img className="rounded-[16px] w-full h-[192px]" src={product.image} />

                        <div className="info !px-[12px] !pt-[12px] !pb-[16px]">
                            <h4 className="name text-[#12282F] text-[16px] font-bold leading-[20px] tracking-normal">{product.name}</h4>
                            <span className="tags !mt-[6px] text-[#5A696E] text-[14px] font-semibold leading-[14px] tracking-normal">{product.tags.join(', ')}</span>
                        </div>
                    </article>
                ))}
            </section>
        </section>
    </main>
}
