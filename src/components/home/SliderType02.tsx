import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';

import LogiImage from "@/resources/images/commons/logo.png"


const SliderType02 = () => {
    const swiperRef = useRef(null);



    // useEffect(() => {

    //     if(swiperRef.current){
    //         swiperRef.current.swiper.slideTo(0);
    //     }
        
    // },[])

    return (
        <Swiper
            ref={swiperRef}
            className="type03_swiper"
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
                360: {
                    slidesPerView: 'auto',
                    allowTouchMove: true,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 'auto',
                    allowTouchMove: false,
                    spaceBetween: 5,
                }
            }}
            observer={true}
            observeParents={true}
        >         
            <SwiperSlide
                className="type02_box"
            >
                <LinkWrap to="/">
                    <div>
                        <figure>
                            <span className="ir_so"></span>
                        </figure>
                    </div>
                    <h4 
                        className="ellipsis"
                    >
                        titletitle
                    </h4>
                    <p>날짜날짜</p>
                </LinkWrap>


                {/* <Link to="/" className="insight_more">
                    <div className="bgframe">
                        <div 
                            className="bgbox"
                            style={{
                                // background: '#fff url('+ bgUrl +') center / cover no-repeat',
                                // backgroundSize: bgSize,
                                backgroundColor: '#fff',
                                backgroundImage: 'url('+ bgUrl +')',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: bgSize,
                            }}
                        >
                        </div>
                    </div>
                </Link>               */}
            
            </SwiperSlide>




            
            {/* {
                (() => {
                    if(resultList.length === 0){
                        return (
                            <div className="insightTab_none">등록된 인사이트가 없습니다.</div>
                        ) 
                    }else if(resultList.length < 4 ){
                        return(
                            forLoop(resultList)
                        )
                    }else{
                        return (
                            resultList.map((result, idx) => (
                                <SwiperSlide key={idx} className='insight_box'>                             
                                    <SlideLink
                                        content={result}
                                    />
                                </SwiperSlide>
                            ))
                            
                        )
                    }
                })()
            } */}
        </Swiper>
    );
};

export default SliderType02;


const LinkWrap = styled(Link)`
    display: block;
    div{
        width: 100%; height: 300px;  transition: all .3s ease-in; overflow: hidden;
    }
    figure{
        width: 100%; 
        height: 100%; 
        background: url(${LogiImage}) center no-repeat;
        background-size: cover; 
        transition: transform .3s ease-in;
        
    }

    :hover div{
        border-radius: 35px 0; transition: all .3s ease-out;
    }
    :hover figure{
        transform: scale(1.1); transition: all .3s ease-out;
    }
    h4{
        font: var(--b2); margin-top: 10px; margin-bottom: 5px; color: #fff;
    }
    p{
        color: #828282; font-weight: 400;
    }


    @media screen and (max-width: 1200px) {
        div{
            height: 335px;
        }
        figure{
            
        }

        :hover div{
            border-radius: 0;
        }
        :hover figure{
            transform: scale(1);
        }
        h4{
            margin-top: 10px; margin-bottom: 5px; font-size: 20px;
        }
        p{
            font-size: 16px;
        }

    }
    @media screen and (max-width: 768px) {
        div{
            height: 360px;
        }
        figure{
            
        }

        :hover div{

        }
        :hover figure{

        }
        h4{
            font-size: 16px; margin-top: 10px; margin-bottom: 5px;
        }
        p{
            font-size: 14px;
        }

    }

`

