import Link from "next/link"

const SideTab = () => {
    return (
        <div className="mb:hidden z-50 fixed w-[12%] top-[12.5%] right-[1%] bg-cover bg-center bg-no-repeat aspect-[194/607] bg-[url('/images/bg-sidetab.png')]">
            <div className="absolute w-[84%] top-[14%] right-[8%] flex flex-col items-center gap-[0.3vw]">
                <Link href="/loi-dai" className="w-full bg-cover bg-center bg-no-repeat aspect-[160/136] bg-[url('/images/btn-sidetab-payment.png')] hover:cursor-pointer hover:brightness-110"></Link>
                <Link href="/loi-dai" className="w-full bg-cover bg-center bg-no-repeat aspect-[160/136] bg-[url('/images/btn-sidetab-playnow.png')] hover:cursor-pointer hover:brightness-110"></Link>
                <Link href="/loi-dai" className="w-full bg-cover bg-center bg-no-repeat aspect-[182/51] bg-[url('/images/btn-sidetab-fb.png')] hover:cursor-pointer hover:brightness-110"></Link>
                <Link href="/loi-dai" className="w-full bg-cover bg-center bg-no-repeat aspect-[182/51] bg-[url('/images/btn-sidetab-zalo.png')] hover:cursor-pointer hover:brightness-110"></Link>
            </div>
        </div>
    )
}

export default SideTab