import { capitalizeFirstLetter } from "@/lib/utils";
import { FC } from "react"

const TabContent:FC<{activeIdx: number, onClick: (index: number)=> void, listTab: any[], styleCSS?: string}> = ({ activeIdx, onClick, listTab, styleCSS }) => {

    return (
        <div className={`flex justify-between items-center pc:text-xl text-sm text-[#486C3B] font-semibold ${styleCSS}`}>
            {
                listTab.map((val, idx) => (
                    idx === activeIdx ?
                    <div key={idx} className={`flex justify-center items-center w-[22%] bg-cover bg-center bg-no-repeat aspect-[129/40] cursor-pointer ${activeIdx != idx ? "bg-none text-[#415F94]" : "text-white"}`} 
                        style={{backgroundImage: `url(/images/btn-news-active.png)`}} 
                        onClick={() => onClick(idx)}
                    >
                        {capitalizeFirstLetter(val.name)}
                    </div> :
                    <div key={idx} className="flex justify-center items-center w-[22%] bg-cover bg-center bg-no-repeat aspect-[129/40] cursor-pointer hover:brightness-150" style={{backgroundImage: `url(/images/btn-news.png)`}}  onClick={() => onClick(idx)}>
                        {capitalizeFirstLetter(val.name)}
                    </div>
                    
                ))
            }
        </div>
    )
}

export default TabContent