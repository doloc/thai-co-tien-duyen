const Footer = () => {
    type CustomStyleProperties = {
        [key: string]: string | number;
    };

    return (
        <div className="relative text-[1.2vw] mb:text-[2.4vw] text-[#587040] font-semibold w-full flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat aspect-[1920/256] mb:aspect-[8/3] mb:bg-[image:var(--bg-mobile-url)] bg-[image:var(--bg-pc-url)]" style={{'--bg-mobile-url': `url(/images/mb-bg-footer.jpg)`, '--bg-pc-url': `url(/images/pc-bg-footer.jpg)`} as CustomStyleProperties}>
            <div className="w-full flex justify-center gap-[2%]">
                <img className='w-[5%] mb:w-[10%]' src="/images/event-loidai/logo-vng.png" alt="" />
                <img className='w-[5%] mb:w-[10%]' src="/images/event-loidai/logo-kingsoft.png" alt="" />
            </div>
            <div className="mb:hidden mt-[1%] flex flex-col items-center">
                <img src="/images/logo-zagoo.png" alt="" className="w-[12%]" />
                <span>Công ty TNHH Giải Trí ZIE</span>
                <span>Địa chỉ trụ sở chính: Tầng 17, Tòa Nhà ROX Tower, số 54A Nguyễn Chí Thanh, Phường Láng Thượng, Quận Đống Đa, Thành phố Hà Nội, Việt Nam.</span>
                <span>Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số: 1177/QĐ-BTTT do Bộ Thông tin và Truyền thông cấp ngày 15/07/2024</span>
                <span>Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số: 396/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 24/07/2015</span>
            </div>
            <div className="gttb:hidden mt-[1%] flex flex-col items-center">
                <img src="/images/logo-zagoo.png" alt="" className="w-[20%]" />
                <span>Công ty TNHH Giải Trí ZIE</span>
                <span>Địa chỉ trụ sở chính: Tầng 17, Tòa Nhà ROX Tower, số 54A Nguyễn Chí Thanh,</span>
                <span>Phường Láng Thượng, Quận Đống Đa, Thành phố Hà Nội, Việt Nam.</span>
                <span>Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số:</span>
                <span>1177/QĐ-BTTT do Bộ Thông tin và Truyền thông cấp ngày 15/07/2024</span>
                <span>Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số: 396/GP-BTTTT</span>
                <span>do Bộ Thông tin và Truyền thông cấp ngày 24/07/2015</span>
            </div>
        </div>
    )
}

export default Footer