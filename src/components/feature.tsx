'use client'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Character from './character';

const iconList: {
    thumbnail: string
}[] = [
    { thumbnail: "/images/icon-1.png"},
    { thumbnail: "/images/icon-2.png"},
    { thumbnail: "/images/icon-3.png"},
    { thumbnail: "/images/icon-4.png"},
    { thumbnail: "/images/icon-5.png"},
]

const Feature = () => {
    type CustomStyleProperties = {
        [key: string]: string | number;
    };

    return (
        <div className="relative flex flex-col items-center w-full bg-cover bg-center bg-no-repeat aspect-[1920/1913] mb:aspect-[640/2031] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/mb-bg-feature.jpg)`, '--bg-pc-url': `url(/images/pc-bg-feature.jpg)`} as CustomStyleProperties}>
            <img src="/images/pc-collection-title.png" alt="Title" className="mb:hidden -mt-[1%] w-[62%] object-contain" />
            <img src="/images/mb-collection-title.png" alt="Title" className="gttb:hidden mt-[2%] w-full object-contain" />
            <Character />

            <img src="/images/pc-feature-title.png" alt="Title" className="mb:hidden -mt-[1%] w-[62%] object-contain" />
            <img src="/images/mb-feature-title.png" alt="Title" className="gttb:hidden mt-[35%] w-full object-contain" />
            <div className="relative top-[1%] mb:top-[3%] w-[71%] mb:w-full flex justify-center bg-cover bg-center bg-no-repeat aspect-[378/193] mb:aspect-[5/4] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/mb-banner-shape.png)`, '--bg-pc-url': `url(/images/pc-banner-shape.png)`} as CustomStyleProperties}>
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
                        <SwiperSlide className='relative sec2-swiper-slide'>
                            <img src="/images/banner-1.jpg" alt="Title" className="w-full object-contain" />
                        </SwiperSlide>
                        <SwiperSlide className='relative sec2-swiper-slide'>
                            <img src="/images/event-banner-1.jpg" alt="Title" className="w-full object-contain" />
                        </SwiperSlide>
                        <SwiperSlide className='relative sec2-swiper-slide'>
                            <img src="/images/event-banner-2.jpg" alt="Title" className="w-full object-contain" />
                        </SwiperSlide>
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