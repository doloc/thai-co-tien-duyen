import { forwardRef, useState } from "react";

const images = {
    linhKhi: ["/images/icon-1.png", "/images/icon-2.png", "/images/icon-3.png", "/images/icon-4.png", "/images/icon-5.png"],
    tienSung: ["/images/icon-1.png", "/images/icon-2.png", "/images/icon-3.png", "/images/icon-4.png", "/images/icon-5.png"],
    coQuan: ["/images/icon-1.png", "/images/icon-2.png", "/images/icon-3.png", "/images/icon-4.png", "/images/icon-5.png"],
};

const categoryLabels: Record<keyof typeof images, string> = {
    linhKhi: "LINH KHÍ",
    tienSung: "TIÊN SỦNG",
    coQuan: "CƠ QUAN",
  };
  

const characterImages = [
    { character: "/images/character-2.png", ssr: "/images/icon-ssr-2.png", faction: "/images/icon-faction-2.png", role: "/images/icon-role-2.png" },
    { character: "/images/character-2.png", ssr: "/images/icon-ssr-2.png", faction: "/images/icon-faction-2.png", role: "/images/icon-role-2.png" },
    { character: "/images/character.png", ssr: "/images/icon-ssr.png", faction: "/images/icon-faction.png", role: "/images/icon-role.png" },
    { character: "/images/character-2.png", ssr: "/images/icon-ssr-2.png", faction: "/images/icon-faction-2.png", role: "/images/icon-role-2.png" },
    { character: "/images/character-2.png", ssr: "/images/icon-ssr-2.png", faction: "/images/icon-faction-2.png", role: "/images/icon-role-2.png" },
];

const Character = forwardRef<HTMLDivElement, {}>((props, ref) => {
    type CustomStyleProperties = {
        [key: string]: string | number;
    };
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof images>("tienSung");
    const [currentCharacter, setCurrentCharacter] = useState(2);

    return (
    <div ref={ref} className="relative w-full flex flex-col items-center">
        {/* Button Switch */}
        <div className="z-50 absolute mb:relative top-0 mb:top-0 w-[30%] mb:w-[60%] flex justify-between font-semibold mb:text-xs">
            {(Object.keys(images) as Array<keyof typeof images>).map((key) => (
            <button
                key={key}
                className={`w-[31%] flex justify-center items-center bg-cover bg-center bg-no-repeat aspect-[11/4] ${selectedCategory === key ? "bg-[image:var(--bg-active)] text-[#3A651C]" : "bg-[image:var(--bg)] t"}`}
                style={{'--bg': `url(/images/bg-btn.png)`, '--bg-active': `url(/images/bg-clicked-btn.png)`} as CustomStyleProperties}
                onClick={() => setSelectedCategory(key as keyof typeof images)}
            >
                {categoryLabels[key]}
            </button>
            ))}
        </div>
        
        {/* Background */}
        <div className="relative top-[1%] w-[71%] mb:w-full flex justify-center bg-cover bg-center bg-no-repeat aspect-[1423/936] mb:aspect-[640/773] bg-[image:var(--bg-pc-url)] mb:bg-[image:var(--bg-mobile-url)] " style={{'--bg-mobile-url': `url(/images/mb-bg-shape.png)`, '--bg-pc-url': `url(/images/pc-bg-shape.png)`} as CustomStyleProperties}>
            <img src={characterImages[currentCharacter].character} alt="character" className="-mt-[2%] mb:mt-[8%] mb:ml-[13%] w-[50%] mb:w-[87%] object-contain" />
            {images[selectedCategory].map((icon, index) => (
                index == 0 ? <div className={`hover:cursor-pointer flex justify-center items-center absolute left-[9%] mb:left-[5%] gttb:bottom-[10%] mb:top-[12%] w-[9%] mb:w-[16%] ${currentCharacter == index ? "bg-cover bg-center bg-no-repeat aspect-[130/144] bg-[image:var(--bg-url)]" : ""}`} 
                style={{'--bg-url': `url(/images/icon-glow.png)`} as CustomStyleProperties}
                onClick={() => setCurrentCharacter(index)}>
                        <img key={index} src={icon} alt={`icon-${index + 1}`} className={`${currentCharacter !== index ? "grayscale" : "w-[90%] object-contain"}`} /> 
                    </div> :
                index == 1 ? <div className={`hover:cursor-pointer flex justify-center items-center absolute left-0 mb:left-[20%] gttb:bottom-[25%] mb:top-[2%] w-[9%] mb:w-[16%] ${currentCharacter == index ? "bg-cover bg-center bg-no-repeat aspect-[130/144] bg-[image:var(--bg-url)]" : ""}`} 
                style={{'--bg-url': `url(/images/icon-glow.png)`} as CustomStyleProperties}
                onClick={() => setCurrentCharacter(index)}>
                        <img key={index} src={icon} alt={`icon-${index + 1}`} className={`${currentCharacter !== index ? "grayscale" : "w-[90%] object-contain"}`} /> 
                    </div> :
                index == 2 ? <div className={`hover:cursor-pointer flex justify-center items-center absolute -left-[4%] mb:left-[40%] top-[42%] mb:-top-[2%] w-[9%] mb:w-[16%] ${currentCharacter == index ? "bg-cover bg-center bg-no-repeat aspect-[130/144] bg-[image:var(--bg-url)]" : ""}`} 
                style={{'--bg-url': `url(/images/icon-glow.png)`} as CustomStyleProperties}
                onClick={() => setCurrentCharacter(index)}>
                        <img key={index} src={icon} alt={`icon-${index + 1}`} className={` ${currentCharacter !== index ? "grayscale" : "w-[90%] object-contain"}`} /> 
                    </div> :
                index == 3 ? <div className={`hover:cursor-pointer flex justify-center items-center absolute gttb:-left-[0%] mb:right-[23%] top-[24%] mb:top-[1%] w-[9%] mb:w-[16%] ${currentCharacter == index ? "bg-cover bg-center bg-no-repeat aspect-[130/144] bg-[image:var(--bg-url)]" : ""}`} 
                style={{'--bg-url': `url(/images/icon-glow.png)`} as CustomStyleProperties}
                onClick={() => setCurrentCharacter(index)}>
                        <img key={index} src={icon} alt={`icon-${index + 1}`} className={`${currentCharacter !== index ? "grayscale" : "w-[90%] object-contain"}`} /> 
                    </div> :
                index == 4 ? <div className={`hover:cursor-pointer flex justify-center items-center absolute gttb:left-[8%] mb:right-[8%] top-[9%] mb:top-[12%] w-[9%] mb:w-[16%] ${currentCharacter == index ? "bg-cover bg-center bg-no-repeat aspect-[130/144] bg-[image:var(--bg-url)]" : ""}`} 
                style={{'--bg-url': `url(/images/icon-glow.png)`} as CustomStyleProperties}
                onClick={() => setCurrentCharacter(index)}>
                        <img key={index} src={icon} alt={`icon-${index + 1}`} className={`${currentCharacter !== index ? "grayscale" : "w-[90%] object-contain"}`} /> 
                    </div> : 
                    <></>
            ))}
            <img src={characterImages[currentCharacter].ssr} alt="SSR" className="absolute gttb:right-[19%] mb:left-[12%] top-[18%] mb:top-[97%] w-[12%] mb:w-[22%]" />
            <img src={characterImages[currentCharacter].faction} alt="Faction" className="absolute right-[8%] mb:right-[19%] top-[35%] mb:top-[95%] w-[22%] mb:w-[46%]" />
            <img src={characterImages[currentCharacter].role} alt="Role" className="absolute right-[11%] mb:right-[23%] top-[44%] mb:top-[105%] w-[19%] mb:w-[41%]" />
        </div>
        
        {/* Navigation */}
        <button className="absolute left-[29%] mb:-left-[1%] gttb:bottom-[6%] mb:top-[29%] w-[4%] mb:w-[10%] mb:rotate-[95deg]" onClick={() => setCurrentCharacter((prev) => (prev - 1 + characterImages.length) % characterImages.length)}>
            <img src="/images/icon-left.png" alt="prev" />
        </button>
        <button className="absolute gttb:left-[29%] mb:right-[2%] top-[6%] mb:top-[28%] w-[4%] mb:w-[10%] mb:rotate-[90deg]" onClick={() => setCurrentCharacter((prev) => (prev + 1) % characterImages.length)}>
            <img src="/images/icon-left-2.png" alt="next" />
        </button>
    </div>
    );
});

export default Character