'use client'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Character from './character';
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const iconList: {
    thumbnail: string
}[] = [
    { thumbnail: "/images/icon-1.png"},
    { thumbnail: "/images/icon-2.png"},
    { thumbnail: "/images/icon-3.png"},
    { thumbnail: "/images/icon-4.png"},
    { thumbnail: "/images/icon-5.png"},
]

gsap.registerPlugin(ScrollTrigger);

const Feature = () => {
    const characterRef = useRef(null);
    const boxRef = useRef(null);

    type CustomStyleProperties = {
        [key: string]: string | number;
    };

    useEffect(() => {
        gsap.fromTo(
            characterRef.current,
            { opacity: 0 }, // Bắt đầu mờ (opacity = 0)
            {
            opacity: 1, // Hiển thị rõ (opacity = 1)
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: characterRef.current,
                start: "top 80%", // Khi top của box chạm 80% viewport
                end: "top 50%", // Khi top của box chạm 50% viewport
                toggleActions: "play none none none", // Chỉ chạy 1 lần
            },
            }
        );
    }, []);

    useEffect(() => {
        gsap.fromTo(
          boxRef.current,
          { opacity: 0, y: 150 }, // Bắt đầu ẩn và dịch xuống 100px
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: boxRef.current, // Kích hoạt khi div này vào view
              start: "top 80%", // Bắt đầu khi top của box cách 80% viewport
              end: "top 50%", // Kết thúc khi box chạm 50% viewport
              toggleActions: "play none none none", // Chỉ chạy 1 lần khi vào view
            },
          }
        );
      }, []);

    return (
        <div className="relative flex flex-col items-center w-full bg-cover bg-center bg-no-repeat aspect-[1920/1913] mb:aspect-[640/2031] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/mb-bg-feature.jpg)`, '--bg-pc-url': `url(/images/pc-bg-feature.jpg)`} as CustomStyleProperties}>
            <img src="/images/pc-collection-title.png" alt="Title" className="mb:hidden -mt-[1%] w-[62%] object-contain" />
            <img src="/images/mb-collection-title.png" alt="Title" className="gttb:hidden mt-[2%] w-full object-contain" />
            <Character ref={characterRef} />

            <img src="/images/pc-feature-title.png" alt="Title" className="mb:hidden -mt-[1%] w-[62%] object-contain" />
            <img src="/images/mb-feature-title.png" alt="Title" className="gttb:hidden mt-[35%] w-full object-contain" />
            <div ref={boxRef}  className="relative top-[1%] mb:top-[3%] w-[71%] mb:w-full flex justify-center bg-cover bg-center bg-no-repeat aspect-[378/193] mb:aspect-[5/4] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/mb-banner-shape.png)`, '--bg-pc-url': `url(/images/pc-banner-shape.png)`} as CustomStyleProperties}>
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