import React, { useEffect, useState } from 'react';
import { BannerFaker } from '@/resources/faker/home/BannerFaker';


import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { Link } from 'react-router-dom';



const Banner = () => {
    const [bannerData, setBannerData] = useState({});

    useEffect(() => {
        const result = BannerFaker();
        const { resultMap } = result || {}
        console.log("data", resultMap);
        if (resultMap.result) {
            setBannerData(resultMap.resultList);
        }
    }, []);


    return (
        <div>
            
        </div>
    );
};

export default Banner;