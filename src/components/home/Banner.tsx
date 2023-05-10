import React, { useEffect, useRef, useState } from 'react';
import { BannerFaker } from '@/resources/faker/home/BannerFaker';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

interface IBanner{
    mainText: string;
    subText: string;
    imgPath: string;
    linkUrl: string;
}


const Banner = () => {
    const [bannerData, setBannerData] = useState<IBanner[]>([]);
    const swiperRef = useRef(null);
    const pagination = {
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    const autoplay = {
        delay: 50000,
        disableOnInteraction: false,
    };

    useEffect(() => {
        const result = BannerFaker();
        const { resultMap } = result || {}
        console.log("data", resultMap);
        if (resultMap.result) {
            setBannerData(resultMap.resultList);
        }
    }, []);

    return (
        <Swiper
            ref={swiperRef}
            pagination={pagination}
            modules={[Pagination, Autoplay]}
            className="main_swiper"
            autoplay={autoplay}
            allowTouchMove={true}
        >
            {bannerData.length > 0 &&  bannerData.map((result, index) => {
                return(
                    <SwiperSlide 
                        key={index}
                        style={{
                            background : `url(${result.imgPath}) center no-repeat`, backgroundSize: "cover"
                        }}
                    >
                        <div className="text_wrap">
                            <h4 className="ellipsis">
                                {result.mainText}
                            </h4>
                            <p 
                                className="ellipsis" 
                            >
                                {result.subText}
                            </p>
                        </div>
                        <a href={result.linkUrl} target="_blank" rel="noopener noreferrer"><span className='ir_so'>{result.linkUrl}</span></a>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};

export default Banner;