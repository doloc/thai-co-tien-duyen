import Footer from "@/components/footer"
import Header from "@/components/header"

const NewsPage = () => {
    type CustomStyleProperties = {
        [key: string]: string | number;
    };
    return (
        <>
            <Header />
            <div className="flex justify-center w-full bg-cover bg-center bg-no-repeat aspect-[1920/3438] mb:aspect-[640/1135] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/mb-bg-news.jpg)`, '--bg-pc-url': `url(/images/pc-bg-news-page.jpg)`} as CustomStyleProperties}>
                
            </div>
            <Footer />
        </>
    )
}

export default NewsPage