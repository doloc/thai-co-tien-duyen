'use client'
import Link from "next/link"
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
    type CustomStyleProperties = {
        [key: string]: string | number;
    };

    const boxRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(
          boxRef.current,
          { x: -200, opacity: 0 }, // Bắt đầu từ vị trí -200px bên trái, ẩn
          { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" } // Di chuyển đến 0, xuất hiện dần
        );
      }, []);

    return (
        <div className="relative overflow-x-hidden w-full flex justify-center bg-cover bg-center bg-no-repeat mb:aspect-[40/71] mb:bg-[image:var(--bg-mobile-url)]" style={{'--bg-mobile-url': `url(/images/mb-bg-hero.jpg)`} as CustomStyleProperties}>
            <video
                className="mb:hidden top-0 left-0 w-full aspect-[2560/1536] object-cover"
                src="/images/pc-banner-vid.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <div ref={boxRef} className="absolute w-[40%] mb:w-[90%] bottom-[6%] mb:bottom-[19%] flex justify-center items-center gap-[2%] bg-cover bg-center bg-no-repeat aspect-[714/190] bg-[url('/images/bg-nav.png')]">
                <Link href="" className="w-[30%] bg-cover bg-center bg-no-repeat aspect-[160/136] bg-[url('/images/btn-sidetab-payment.png')] hover:cursor-pointer hover:brightness-110"></Link>
                <div className="w-[30%] flex flex-col justify-center items-center gap-1">
                    <Link href="" className="w-full bg-cover bg-center bg-no-repeat aspect-[182/51] bg-[url('/images/btn-sidetab-fb.png')] hover:cursor-pointer hover:brightness-110"></Link>
                    <Link href="" className="w-full bg-cover bg-center bg-no-repeat aspect-[182/51] bg-[url('/images/btn-sidetab-zalo.png')] hover:cursor-pointer hover:brightness-110"></Link>
                </div>
                <Link href="" className="w-[30%] bg-cover bg-center bg-no-repeat aspect-[160/136] bg-[url('/images/btn-sidetab-playnow.png')] hover:cursor-pointer hover:brightness-110"></Link>
            </div>
            <div className="absolute gttb:hidden w-full bottom-[5%] flex justify-center animate-bounce">
                <img className='gttb:hidden w-[40%] ' src="/images/scrolling.png" alt="" />
            </div>
        </div>
    )
}

export default Hero