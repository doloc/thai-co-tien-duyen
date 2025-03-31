'use client'
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import News from "@/components/news";
import SideTab from "@/components/side-tab";
import { useRef } from "react";

export default function Home() {
  const topRef = useRef<HTMLDivElement>(null);
  const newRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNews = () => {
    newRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f0f6e8] text-gray-800" >
      <div ref={topRef}></div>
      <Header onScrollToNews={scrollToNews}/>
      <Hero />
      <div ref={newRef}></div>
      <News />
      <Feature />
      <Footer />
      <SideTab onScrollToTop={scrollToTop}/>
    </div>
  );
}
