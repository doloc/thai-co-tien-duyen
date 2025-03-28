'use client'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Feature = () => {
    type CustomStyleProperties = {
        [key: string]: string | number;
    };

    return (
        <div className="relative flex flex-col items-center w-full bg-cover bg-center bg-no-repeat aspect-[1920/1913] mb:aspect-[640/2031] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/mb-bg-feature.jpg)`, '--bg-pc-url': `url(/images/pc-bg-feature.jpg)`} as CustomStyleProperties}>
            <img src="/images/pc-collection-title.png" alt="Title" className="mb:hidden -mt-[1%] w-[62%] object-contain" />
            <img src="/images/mb-collection-title.png" alt="Title" className="gttb:hidden mt-[2%] w-full object-contain" />
            <div className="z-50 absolute mb:relative top-[9.5%] mb:top-0 w-[30%] mb:w-[60%] flex justify-between font-semibold mb:text-xs">
                <div className="btn-image w-[31%] flex justify-center items-center bg-cover bg-center bg-no-repeat aspect-[11/4] bg-[image:var(--bg-url)]" style={{'--bg-url': `url(/images/bg-btn.png)`} as CustomStyleProperties}>
                    <span className="text-[#F0F7EB]">LINH KHÍ</span>
                </div>
                <div className="btn-image w-[31%] flex justify-center items-center bg-cover bg-center bg-no-repeat aspect-[11/4] bg-[image:var(--bg-url)]" style={{'--bg-url': `url(/images/bg-clicked-btn.png)`} as CustomStyleProperties}>
                    <span className="text-[#335D15]">TIÊN SỦNG</span>
                </div>
                <div className="btn-image w-[31%] flex justify-center items-center bg-cover bg-center bg-no-repeat aspect-[11/4] bg-[image:var(--bg-url)]" style={{'--bg-url': `url(/images/bg-btn.png)`} as CustomStyleProperties}>
                    <span className="text-[#F0F7EB]">CƠ QUAN</span>
                </div>
            </div>
            <div className="relative top-[1%] w-[71%] mb:w-full flex justify-center bg-cover bg-center bg-no-repeat aspect-[1423/936] mb:aspect-[640/773] bg-[image:var(--bg-pc-url)] mb:bg-[image:var(--bg-mobile-url)] " style={{'--bg-mobile-url': `url(/images/mb-bg-shape.png)`, '--bg-pc-url': `url(/images/pc-bg-shape.png)`} as CustomStyleProperties}>
                <img src="/images/character.png" alt="" className="-mt-[2%] mb:mt-[8%] mb:ml-[16%] w-[50%] mb:w-[90%] object-contain" />
                <img src="/images/icon-left.png" alt="" className="absolute left-[22%] mb:-left-[1%] gttb:bottom-[7%] mb:top-[29%] w-[5%] mb:w-[10%] mb:rotate-[95deg]" />
                <img src="/images/icon-1.png" alt="" className="absolute left-[9%] mb:left-[5%] gttb:bottom-[10%] mb:top-[12%] w-[9%] mb:w-[16%]" />
                <img src="/images/icon-2.png" alt="" className="absolute left-0 mb:left-[20%] gttb:bottom-[25%] mb:top-[2%] w-[9%] mb:w-[16%]" />
                <img src="/images/icon-3.png" alt="" className="absolute -left-[4%] mb:left-[40%] top-[44%] mb:-top-[2%] w-[9%] mb:w-[16%]" />
                <img src="/images/icon-4.png" alt="" className="absolute gttb:-left-[1%] mb:right-[23%] top-[25%] mb:top-[1%] w-[9%] mb:w-[16%]" />
                <img src="/images/icon-5.png" alt="" className="absolute gttb:left-[7%] mb:right-[8%] top-[11%] mb:top-[12%] w-[9%] mb:w-[16%]" />
                <img src="/images/icon-left-2.png" alt="" className="absolute gttb:left-[20%] mb:right-[2%] top-[6%] mb:top-[28%] w-[5%] mb:w-[10%] mb:rotate-[90deg]" />

                <img src="/images/icon-ssr.png" alt="" className="absolute gttb:right-[19%] mb:left-[12%] top-[18%] mb:top-[97%] w-[12%] mb:w-[22%]" />
                <img src="/images/icon-faction.png" alt="" className="absolute right-[8%] mb:right-[19%] top-[35%] mb:top-[95%] w-[22%] mb:w-[46%]" />
                <img src="/images/icon-role.png" alt="" className="absolute right-[11%] mb:right-[23%] top-[44%] mb:top-[105%] w-[19%] mb:w-[41%]" />
            </div>

            <img src="/images/pc-feature-title.png" alt="Title" className="mb:hidden -mt-[1%] w-[62%] object-contain" />
            <img src="/images/mb-feature-title.png" alt="Title" className="gttb:hidden mt-[35%] w-full object-contain" />
            <div className="relative top-[1%] mb:top-[3%] w-[71%] mb:w-full flex justify-center bg-cover bg-center bg-no-repeat aspect-[378/193] mb:aspect-[5/4] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/mb-banner-shape.png)`, '--bg-pc-url': `url(/images/pc-banner-shape.png)`} as CustomStyleProperties}>
                {/* <div className="absolute top-[6%] left-[21%] mb:left-[8%] w-[56%] mb:w-[84%] h-auto">
                    <img src="/images/banner-1.jpg" alt="Title" className="w-full object-contain" />
                </div> */}

                <div className="absolute top-[6%] left-[21%] mb:left-[8%] w-[56%] mb:w-[84%] h-auto">
                    <Swiper
                        modules={[ Navigation, Pagination, Autoplay]}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        loop={true}
                        pagination={{
                            el: ".pagination-banner",
                            clickable: true,
                        }}
                        navigation={{
                            enabled: true,
                            prevEl: ".swiper-prev",
                            nextEl: ".swiper-next",
                        }}
                        autoplay={{ delay: 3000 }}
                        className=""
                    >                            
                        {
                            <>
                            <SwiperSlide className='relative sec2-swiper-slide'>
                                <img src="/images/banner-1.jpg" alt="Title" className="w-full object-contain" />
                            </SwiperSlide>
                            <SwiperSlide className='relative sec2-swiper-slide'>
                                <img src="/images/banner-1.jpg" alt="Title" className="w-full object-contain" />
                            </SwiperSlide>
                            </>
                        }
                    </Swiper>
                </div>
                <div className="pagination-banner"></div>
                <div className="z-50 absolute w-[75%] mb:w-[80%] bottom-[55%] mb:-bottom-[2%] flex justify-between">
                    <img className="swiper-prev w-[7%] mb:w-[15%] cursor-pointer hover:brightness-110" src="/images/swiper-prev.png" alt="" />
                    <img className="swiper-next w-[7%] mb:w-[15%] cursor-pointer hover:brightness-110" src="/images/swiper-next.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Feature