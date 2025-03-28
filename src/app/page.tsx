import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import News from "@/components/news";
import SideTab from "@/components/side-tab";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0f6e8] text-gray-800">
      <Header />
      <Hero />
      <News />
      <Feature />
      <Footer />
      <SideTab />
    </div>
  );
}
