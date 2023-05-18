import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';


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
                    <p className="insight_tit ellipsis">titletitle</p>
                    <p className="insight_date">날짜날짜</p>
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



    @media screen and (max-width: 1200px) {

    }
    @media screen and (max-width: 768px) {
        
    }

`


/* .insight_more{display: block;}
.insight_more .bgframe{width: 100%; height: 300px;  transition: all .3s ease-in; overflow: hidden;}
.insight_more:hover .bgframe{border-radius: 35px 0; transition: all .3s ease-out;}

.insight_more.link_disable:hover .bgframe{border-radius: 0;}
.insight_more .bgbox{width: 100%; height: 100%; background-size: cover; transition: transform .3s ease-in;}
.insight_more:hover .bgbox{transform: scale(1.1); transition: all .3s ease-out;}
.insight_more.link_disable:hover .bgbox{transform: scale(1);}
.insight_more p{color: #828282; font-weight: 400;}
.insight_more .insight_tit{font: var(--b2); margin-top: 10px; margin-bottom: 5px; color: #fff;} */









    /* .insight_more:hover .bgbox{transform: scale(1);}
	.insight_more:hover .bgframe{border-radius: 0;}
	.insight_more .bgframe{height: 335px;}
	.insight_more .insight_tit{margin-top: 10px; margin-bottom: 5px; font-size: 20px;}
	.insight_more p{font-size: 16px;} */









	/* .insight_more .bgframe{height: 360px;}
	.insight_more .insight_tit{font-size: 16px; margin-top: 10px; margin-bottom: 5px;}
	.insight_more .insight_date{font-size: 14px;} */