import { Link } from 'react-router'

import logo from '../../assets/logo.svg'
import appStore from '../../assets/app-store.svg'
import googlePlay from '../../assets/google-play.svg'
import appGalerey from '../../assets/app-galerey.svg'
import telegram from '../../assets/telegram.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import mobilePhone from '../../assets/mobile-phone.svg'
import letter from '../../assets/letter.svg'

export const Footer = function Footer() {
    let fonts = 'font-semibold text-[16px] leading-[130%] tracking-normal text-center hover:text-[]'
    let apps = 'min-w-[160px] !p-[12px] flex items-center justify-center gap-[8px] rounded-[12px] bg-[#F7F7F7]'
    let widgetDescr = ['flex flex-col justify-center', 'text-[#B0B7BA] text-[12px] leading-[130%] tracking-normal text-center', 'text-[#12282F] text-[14px] leading-[130%] tracking-normal text-center']
    return <footer className="footer w-full max-w-full flex flex-col justify-center justify-self-center items-center bg-[#FFF]">

        <section className="w-full max-w-full !px-[24px] !pt-[24px] !pb-[52px] flex justify-center">
            <div className="w-full max-w-[1080px] flex justify-between items-end gap-[24px]">
                <div className="text-info w-full max-w-[506px]">
                    <Link to={'/'}><img src={logo} /></Link>
                    <ul className='max-w-[340px] !mt-[20px] flex justify-between items-center gap-[8px] text-[#12282F]'>
                        <li className={fonts}><Link to={'#'}>Biz haqimizda</Link></li>
                        <li className={fonts}><Link to={'#'}>Ommaviy oferta</Link></li>
                        <li className={fonts}><Link to={'#'}>Bog’lanish</Link></li>
                    </ul>
                    <p className="descr !mt-[12px] text-[#5A696E] text-[14px] leading-[130%] tracking-normal">10 dan oshiq restoran, choyxona va kafelarni tanlab oson buyurtma berishingiz mumkin. Bularning barchasini telefoningizda turib bajarish mumkin</p>
                </div>

                <ul className="apps-download w-full max-w-[504px] flex items-center justify-between gap-[8px]">
                    <li>
                        <Link className={apps} target="_blank" to={'https://apps.apple.com/uz/app/yemak-food-delivery-in-karshi/id1644243734'}>
                            <img src={appStore} />
                            <div className={widgetDescr[0]}>
                                <span className={widgetDescr[1]}>Yuklab oling</span>
                                <strong className={widgetDescr[2]}>App Store</strong>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className={apps} target="_blank" to={'https://play.google.com/store/apps/details?id=uz.yemak.app'}>
                            <img src={googlePlay} />
                            <div className={widgetDescr[0]}>
                                <span className={widgetDescr[1]}>Yuklab oling</span>
                                <strong className={widgetDescr[2]}>Google Play</strong>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className={apps} target="_blank" to={'https://consumer.huawei.com/en/mobileservices/appgallery/'}>
                            <img src={appGalerey} />
                            <div className={widgetDescr[0]}>
                                <span className={widgetDescr[1]}>Yuklab oling</span>
                                <strong className={widgetDescr[2]}>App Gallery</strong>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>

        <section className="w-full max-w-full !px-[24px] !py-[12px] border-t-[1px] border-t-[#F0F0F0] flex justify-center">
            <div className="w-full max-w-[1080px] flex items-center justify-between gap-[18px]">
                <div className="copyright text-[#12282F] text-[12px] leading-[100%] tracking-normal">© Yemak Delivery 2022. Barcha huquqlar himoyalangan.</div>

                <ul className="socials w-full max-w-[76px] flex items-center justify-between gap-[4px]">
                    <li><Link to={'https://t.me/yemak'}><img src={telegram} /></Link></li>
                    <li><Link to={'https://www.facebook.com/yemakuz'}><img src={facebook} /></Link></li>
                    <li><Link to={'https://www.instagram.com/yemak.uz'}><img src={instagram} /></Link></li>
                </ul>

                <ul className="contacts w-full max-w-[255px] flex items-center justify-between gap-[10px]">
                    <li className='flex items-center justify-center gap-[4px]'><img src={mobilePhone} /><span className='text-[#12282F] text-[12px] leading-[100%] tracking-normal'>+998 75 220 01 05</span></li>
                    <li className='flex items-center justify-center gap-[4px]'><img src={letter} /><span className='text-[#12282F] text-[12px] leading-[100%] tracking-normal'>info@yemak.uz</span></li>
                </ul>
            </div>
        </section>

    </footer>
}
