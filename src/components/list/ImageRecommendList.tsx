import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import moment from "moment";

import Row from '../layout/Row';


const ImageRecommendList = () => {
    return (
        <RecommendWrap>
            <Row>
                <h3>
                    <span>추천</span> 목록 예시
                </h3>
                <RecommendSwiper
                    //className="recommend_swiper"
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        360: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        769: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1201: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }
                    }}
                    observer={true}
                    observeParents={true}
                >
                    {/* {list.map((content, idx) => (
                        <SwiperSlide key={idx} className="">
                            <RecommendCard bbsId={bbsId} content={content}/>
                        </SwiperSlide>
                        
                    ))} */}
                        <SwiperSlide>
                            <ListLink to="/">
                                <div>
                                    <figure>

                                    </figure>
                                </div>
                            </ListLink>
                        </SwiperSlide>
                </RecommendSwiper>

            </Row>
        </RecommendWrap>
    );
};

export default ImageRecommendList;

const RecommendWrap = styled.div`
    background-color: #000;
    height: 390px;
    margin-bottom: 220px;
    margin-top: -1px;
    h3{
        color: #fff;
        font-size: 26px;
        font-weight: 600;
        margin-bottom: 20px;
        padding: 0 30px;
        span{
            color: #ff4d15;
        }
    }
    @media screen and (max-width: 1200px){
        h3{
            font-size: 26px;
            font-weight: 600;
            padding: 0 20px;
        }
    }
    @media screen and (max-width: 768px){
        margin-bottom: 120px;
        padding-top: 0;
    }
    @media screen and (max-width: 640px){
        margin-bottom: 50px;
    }
`
const RecommendSwiper = styled(Swiper)`
    padding: 0 30px;
    a{
        
    }
    @media screen and (max-width: 1200px){
        padding: 0 20px;
    }
`

const ListLink = styled(Link)`
    display: block;
    div{
        border: 1px solid red;

        border-radius: 0;
        height: 450px;
        overflow: hidden;
        position: relative;
        transition: all .3s ease-in;
        width: 100%;
    }
    :hover div{
        border-radius: 35px 0px; transition: all .3s ease-out;
    }
    figure{
        width: 100%; height: 100%; transition: transform .3s ease-in;
    }
    :hover figure{
        transform: scale(1.1); transition: all .3s ease-out;
    }

    @media screen and (max-width: 1200px){
        :hover div{
            border-radius: 0;
        }
        :hover figure{
            -webkit-transform: scale(1);
        transform: scale(1);
        }
    }
    @media screen and (max-width: 640px){
        div{
            height: 380px;
        }
        
        
    }
`

const BackgroundBox = styled.div`
        
    @media screen and (max-width: 640px){
        
    }
`