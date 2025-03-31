'use client'
import { FC, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Header: FC<{
    onScrollToNews?: () => void;
}> = ({onScrollToNews}) => {
  

  type CustomStyleProperties = {
    [key: string]: string | number;
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="z-[100] w-full bg-cover bg-center bg-no-repeat aspect-[1920/169] mb:aspect-[4/1] bg-[image:var(--bg-pc-url)] mb:bg-[image:var(--bg-mobile-url)] text-white fixed"
        style={{'--bg-mobile-url': `url(/images/bg-mb-header.png)`, '--bg-pc-url': `url(/images/bg-pc-header.png)`} as CustomStyleProperties}>
        <img className='absolute w-[7.5%] mb:w-[19%] top-[7%] left-[9.5%] mb:left-[3%]' src="/images/Icon-App.png" alt="" />
        
        <div className="mb:hidden absolute h-[30%] w-[20%] top-[10%] left-[18%] flex items-center justify-between">
          <img className="w-[48%] btn-image" src="/images/pc-btn-playnow.jpg" alt="" />
          <img className="w-[48%] btn-image" src="/images/pc-btn-payment.jpg" alt="" />
        </div>

        <div className="gttb:hidden absolute h-[30%] w-[54%] top-[10%] left-[25%] flex items-center justify-between">
          <img className="w-[47%] btn-image" src="/images/mb-btn-playnow.png" alt="" />
          <img className="w-[47%] btn-image" src="/images/mb-btn-payment.png" alt="" />
        </div>

        <nav className="mb:hidden absolute top-[10%] left-[39%] h-[30%] flex items-center font-semibold text-[#FDF3E5] text-[1vw]">
          <div className="flex hover:text-[#FFEB7D]">
            <img className="w-[10%] object-contain" src="/images/icon-nav.png" alt="" />
            <Link href={""} className="ml-5">TRANG CHỦ</Link>
          </div>
          <div className="flex ml-5 hover:text-[#FFEB7D]" onClick={onScrollToNews}>
            <img className="w-[10%] object-contain" src="/images/icon-nav.png" alt="" />
            <Link href={""} className="ml-5">TIN TỨC</Link>
          </div>
          <div className="flex ml-5 hover:text-[#FFEB7D]" onClick={onScrollToNews}>
            <img className="w-[10%] object-contain" src="/images/icon-nav.png" alt="" />
            <Link href={""} className="ml-5">SỰ KIỆN</Link>
          </div>
          <div className="flex ml-5 hover:text-[#FFEB7D]">
            <img className="w-[10%] object-contain" src="/images/icon-nav.png" alt="" />
            <Link href={""} className="ml-5">HỖ TRỢ</Link>
          </div>
          <div className="flex ml-5 hover:text-[#FFEB7D]">
            <img className="w-[10%] object-contain" src="/images/icon-nav.png" alt="" />
            <Link href={""} className="ml-5">CỘNG ĐỒNG</Link>
          </div>
        </nav>

        <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn("gttb:hidden absolute top-[13%] right-[5%] w-[7%] bg-cover bg-center bg-no-repeat", isMenuOpen ? "aspect-[45/45] bg-[url('/images/icon-close.png')]": "aspect-[53/44] bg-[url('/images/icon-menu.png')]")}
        >
        </button>
        {isMenuOpen && (
            <div className="absolute -z-10 top-[51%] left-0 w-full bg-cover bg-center bg-no-repeat aspect-[640/533] bg-[url('/images/mb-menu-tab.png')]">
                <div className="mt-[3%] w-full h-[77%] flex flex-col justify-between items-center text-[#FFFCDC] text-[5vw]">
                    <Link href="" >Trang Chủ</Link>
                    <Link href="" >Tin Tức</Link>
                    <Link href="" >Sự Kiện</Link>
                    <Link href="" >Hỗ Trợ</Link>
                    <Link href="" >Cộng Đồng</Link>
                    <Link href="" >Hướng Dẫn</Link>
                </div>
            </div>
        )}
      </header>
    </>
  );
}

export default Header