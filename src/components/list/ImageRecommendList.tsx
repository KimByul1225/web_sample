import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import iconNext from "@/resources/icons/list/icon_recommend_next.png"
import iconPrev from "@/resources/icons/list/icon_recommend_prev.png"

import NoImg from "@/resources/images/commons/no_image.png"


interface IListData{
    index: number;
    title: string;
    date: Date;
    imgPath: string;
    linkUrl: string;
}

interface ILink{
    background?: string;
}

const ImageRecommendList = ({list}: {list: IListData[]}) => {
    return (
        <RecommendWrap>
            <RecommendRow>
                <h3>
                    <span>추천</span> 목록 예시
                </h3>
                <RecommendSwiper
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
                    {
                        list.map((item) => {
                            const newDate = new Intl.DateTimeFormat('kr').format(item.date);
                            return(
                                <SwiperSlide key={item.index}>
                                    <ListLink 
                                        to={item.linkUrl}
                                        background={item.imgPath}
                                    
                                    >
                                        <div>
                                            <figure/>
                                            <BackgroundFilter>
                                                <TextBox>
                                                    <h4 className="ellipsis2">
                                                        {item.title}
                                                    </h4>
                                                    <p>{newDate}</p>
                                                </TextBox>
                                            </BackgroundFilter>
                                        </div>
                                        
                                    </ListLink>
                                </SwiperSlide>
                            )
                        })
                    }
                        
                        
                </RecommendSwiper>

            </RecommendRow>
        </RecommendWrap>
    );
};

export default ImageRecommendList;

const RecommendRow = styled.div`
    margin: 0 auto;
    max-width: 1260px;
`

const RecommendWrap = styled.div`
    background-color: #000;
    height: 390px;
    margin-bottom: 100px;
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
    .swiper-button-next::after, .swiper-button-prev::after{
        display: none;
    }
    .swiper-button-prev{
        background: var(--col_acc) url(${iconPrev}) center no-repeat; background-size: 24px; width: 60px; height: 60px; border-radius: 30px; left: 0; top: 50%;
    }
    .swiper-button-prev.swiper-button-disabled{
        background: #333333 url(${iconPrev}) center no-repeat; background-size: 24px; width: 60px; height: 60px; border-radius: 30px; opacity: 1;
    }
    .swiper-button-next{
        background: var(--col_acc) url(${iconNext}) center no-repeat; background-size: 24px; width: 60px; height: 60px; border-radius: 30px; right: 0; top: 50%;
    }
    .swiper-button-next.swiper-button-disabled{
        background: #333333 url(${iconNext}) center no-repeat; background-size: 24px; width: 60px; height: 60px; border-radius: 30px; opacity: 1;
    }
    @media screen and (max-width: 1200px){
        padding: 0 20px;
        .swiper-button-next, .swiper-button-prev{
            display: none;
        }
    }
`
const ListLink = styled(Link)<ILink>`
    display: block;
    > div{
        border-radius: 0;
        height: 450px;
        overflow: hidden;
        position: relative;
        transition: all .3s ease-in;
        width: 100%;
    }
    :hover > div{
        border-radius: 35px 0px; transition: all .3s ease-out;
    }
    figure{
        width: 100%; height: 100%; transition: transform .3s ease-in;
        background: #fff url(${(props) => props.background || NoImg}) center no-repeat;
        background-size: cover;
    }
    :hover figure{
        transform: scale(1.1); transition: all .3s ease-out;
    }

    @media screen and (max-width: 1200px){
        > div {
            height: 38vw;
        }
        :hover > div{
            border-radius: 0;
        }
        :hover figure{
            -webkit-transform: scale(1);
        transform: scale(1);
        }
    }
    @media screen and (max-width: 768px){
        > div {
            height: 55vw;
        }
    }
    @media screen and (max-width: 640px){
        > div{
            height: 380px;
        }
    }
`
const BackgroundFilter = styled.div`
    background: linear-gradient(1turn,rgba(0,0,0,.6),transparent 35%);
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;   
`

const TextBox = styled.div`
    bottom: 30px;
    left: 0;
    padding: 0 30px;
    position: absolute;
    h4{
        color: #fff;
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    p{
        color: #cecece;
        font-size: 16px;
        font-weight: 400;
    }
    @media screen and (max-width: 1200px){
        h4{
            font-size: 18px;
        }
    }
`