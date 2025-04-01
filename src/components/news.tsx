'use client'

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NewsItemIface } from "@/interface/EntityIface";
import { getListNews } from "@/helper/api-container";
import { convertTimeStampToDate } from "@/lib/timeutils";
import { cn } from "@/lib/utils";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TabContent from "./tab-content";

interface tabItem {
    idx: number,
    name: string,
    path: string,
    type: string,
}

const listTab: tabItem[] = [
    { idx: 0, name: "Tin Tức", path: "/tin-tuc", type: "NEWS" },
    { idx: 1, name: "Sự Kiện", path: "/su-kien", type: "EVENT" },
    { idx: 2, name: "Tính năng", path: "/tinh-nang", type: "FEATURE" },
    { idx: 3, name: "Hướng Dẫn", path: "/huong-dan", type: "TUTORIAL" },
];

gsap.registerPlugin(ScrollTrigger);

const News = () => {
    type CustomStyleProperties = {
        [key: string]: string | number;
    };
    const router = useRouter()
    const boxRef = useRef(null);

    const [currentTab, setCurrentTab] = useState<tabItem>(listTab[0]);
    const itemClicked = (idx: number) => {
        setCurrentTab(listTab[idx]);
    }

    const [newsList, setNewsList] = useState<NewsItemIface[]>([]);

    const fetchNewsData = async (from: number, count: number, type: string) => {
        try {
            const resp = await getListNews(65640, from, count , type, true);
            
            if (resp.error_code >= 0 && resp.data !== null && resp.data !== undefined) {
                setNewsList(resp.data);
            }            
        } catch (ex) {
            // updateAlert?.('Đã có lỗi xảy ra');
        }
    }
    
    useEffect(() => {
        fetchNewsData(0, 6, currentTab.type);
    }, [currentTab])

    useEffect(() => {
        gsap.fromTo(
          boxRef.current,
          { opacity: 0, y: -150 }, // Bắt đầu ẩn và dịch xuống 100px
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
        <div className="relative flex flex-col items-center w-full bg-cover bg-center bg-no-repeat aspect-[1920/1080] mb:aspect-[640/1135] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/mb-bg-news.jpg)`, '--bg-pc-url': `url(/images/pc-bg-news.jpg)`} as CustomStyleProperties}>
            <img src="/images/pc-news-title.png" alt="Title" className="mb:hidden -mt-[1%] w-[66%] object-contain" />
            <img src="/images/mb-news-title.png" alt="Title" className="gttb:hidden mt-[2%] w-[full object-contain" />
            <div className="relative flex flex-col justify-start items-end mb:items-center w-[69%] mb:w-full bg-cover bg-center bg-no-repeat aspect-[1330/472] mb:aspect-[640/771] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]"
            style={{'--bg-mobile-url': `url(/images/mb-news-shape.png)`, '--bg-pc-url': `url(/images/pc-news-shape.png)`} as CustomStyleProperties}>
                    <div className="absolute top-[3.5%] mb:top-[2%] left-[3.2%] mb:left-[4.5%] w-[50%] mb:w-[95%] flex flex-col items-center">
                        <Swiper
                            modules={[ Navigation, Pagination, Autoplay]}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={1}
                            loop={true}
                            pagination={{
                                el: ".pagination",
                                clickable: true,
                            }}
                            autoplay={{ delay: 3000 }}
                            className="pc:w-full pc:h-full tb:w-[95%] mb:w-[95%]"
                        >           
                            <SwiperSlide className='relative sec2-swiper-slide'>
                                <img src='/images/event-banner-1.jpg' alt="" className='w-full tb:w-[97%] mb:w-[97%]' />
                            </SwiperSlide>
                            <SwiperSlide className='relative sec2-swiper-slide'>
                                <img src='/images/event-banner-2.jpg' alt="" className='w-full tb:w-[97%] mb:w-[97%]' />
                            </SwiperSlide>
                            <SwiperSlide className='relative sec2-swiper-slide'>
                                <img src='/images/banner-1.jpg' alt="" className='w-full tb:w-[97%] mb:w-[97%]' />
                            </SwiperSlide>
                        </Swiper>
                        <div className="pagination"></div>
                        </div>
                    <div className="w-[44%] mb:w-[85%] mt-[3%] gttb:mr-[1%] mb:mt-[56%]">
                        <TabContent
                            activeIdx={currentTab.idx}
                            onClick={(idx) => itemClicked(idx)}
                            listTab={listTab}
                            styleCSS=""
                        />
                        <div className="z-20 mt-[4%] flex flex-col gap-[0.5vw] overflow-visible overflow-y-hidden">
                            {
                                newsList != null && newsList.length > 0 && newsList.slice(0, 6).map((val, idx) => (
                                    <div key={idx} className="relative w-full flex flex-col items-center gap-0 mb:gap-[2vw]">
                                        {idx < 2 ? 
                                            <img src="/images/hot-news.png" alt="Title" className="absolute left-[2%] w-[12%]" /> : <></>
                                        }
                                        <div key={idx} className={cn("w-[70%] mb:w-[60%] flex justify-between text-[#57744C] text-[1vw] mb:text-xs", idx < 2 ? "text-[#122205] font-bold" : "")}>
                                            <Link href={currentTab.path+"/"+String(val.path+"/"+val.postId)} className="w-[80%] whitespace-nowrap overflow-hidden text-ellipsis hover:text-blue-300">{val.title}</Link>
                                            <p className=''>{convertTimeStampToDate(val.time)}</p>
                                        </div>
                                        <div className="custom-line"></div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="z-20 mt-[2%] flex justify-center items-center">
                            <Link className="px-3 py-1 bg-cover bg-center bg-no-repeat aspect-[129/40] text-white text-[1vw] mb:text-xs flex justify-center items-center"
                            style={{ backgroundImage: `url(/images/btn-news-active.png)` }} href={currentTab.path}>Xem Thêm</Link>
                        </div>
                    </div>
            </div>

            <div ref={boxRef} className="w-[48%] mb:w-[90%] mt-[2%] flex flex-col gap-4 mb:gap-2">
                <div className="flex justify-between">
                    <img src="/images/huong-dan-nap-the.png" alt="" className="w-[49%] object-contain btn-image" />
                    <img src="/images/dieu-khoan-su-dung.png" alt="" className="w-[49%] object-contain btn-image" />
                </div>
                <div className="flex justify-between">
                    <img src="/images/ho-tro.png" alt="" className="w-[49%] object-contain btn-image" />
                    <img src="/images/cam-nang-tan-thu.png" alt="" className="w-[49%] object-contain btn-image" />
                </div>
            </div>
        </div>
    )
}

export default News