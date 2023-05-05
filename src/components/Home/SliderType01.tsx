import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";

import "@/resources/styles/slider.css";

const SliderType01 = () => {
    return (
        <SliderWrap>
            <Row>
                <Swiper 
                    className="solution_box"
                    breakpoints={{
                        360: {
                            slidesPerView: 'auto',
                            allowTouchMove: true,
                        },
                        768: {
                            slidesPerView: 'auto',
                            allowTouchMove: true,
                            
                        },
                        1200: {
                            slidesPerView: 'auto',
                            allowTouchMove: false
                        },
                    }}
                    observer={true}
                    observeParents={true}
                >   
                    <SwiperSlide>
                        <Link to="/solutions/view/1">
                            <h4>[ESG 평가 및 데이터 분석]</h4>
                            <p>ESG Analytics</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/solutions/view/2">
                            <h4>[ESG/책임투자 맞춤형 리서치]</h4>
                            <p>ESG Research</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/solutions/view/5">
                            <h4>[ESG 투자상품 개발 및 운용 전략]</h4>
                            <p>ESG Investing Strategy</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/solutions/view/9">
                            <h4>[책임투자 & 인게이지먼트 자문]</h4>
                            <p>RI Active Ownership</p>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </Row>
            
        </SliderWrap>
    );
};

export default SliderType01;


const SliderWrap = styled.div`
    padding: 100px 0;  background-color: #fff;

    @media screen and (max-width:1200px){
        padding: 80px 0;
    }
    @media screen and (max-width:768px){
        padding: 50px 0;
    }
`
const Row = styled.div`
    max-width: 1500px; margin: 0 auto;
    @media screen and (max-width:1200px){
        padding: 0;
    }
`



