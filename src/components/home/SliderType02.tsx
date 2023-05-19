import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';

import LogiImage from "@/resources/images/commons/logo.png"
import { SliderType02Faker } from '@/resources/faker/home/SliderType02Faker';


interface ILinkWrap{
    background?: string;
}

interface ISlider{
    title: string;
    date: Date;
    imgPath: string;
    linkUrl: string;
}

const SliderType02 = () => {
    const [sliderData, setSliderData] = useState<ISlider[]>([]);


    const swiperRef = useRef(null);


    useEffect(() => {
        const result = SliderType02Faker();
        const { resultMap } = result || {}
        console.log("data", resultMap);
        if (resultMap.result) {
            setSliderData(resultMap.resultList);
        }
    }, []);

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
                768: {
                    slidesPerView: 'auto',
                    allowTouchMove: false,
                    spaceBetween: 5,
                },
                360: {
                    slidesPerView: 'auto',
                    allowTouchMove: true,
                    spaceBetween: 20,
                }
            }}
            observer={true}
            observeParents={true}
        >         
            
            {
                sliderData.length > 0 ?
                sliderData.map((result, index) => {
                    const newDate = new Intl.DateTimeFormat('kr').format(result.date);
                    return(
                        <SwiperSlide
                            className="type02_box"
                        >
                            <LinkWrap 
                                to="/"
                                key={index}
                                background={result.imgPath}
                            >
                                <div>
                                    <figure>
                                        <span className="ir_so"></span>
                                    </figure>
                                </div>
                                <h4 
                                    className="ellipsis"
                                >
                                    {result.title}
                                </h4>
                                <p>{newDate}</p>
                            </LinkWrap>
                        </SwiperSlide>
                    )
                })
            :
                null
            }
                


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
            
            





        </Swiper>
    );
};

export default SliderType02;


const LinkWrap = styled(Link)<ILinkWrap>`
    display: block;
    div{
        width: 100%; height: 300px;  transition: all .3s ease-in; overflow: hidden;
    }
    figure{
        width: 100%; 
        height: 100%; 
        background: url(${(props) => props.background}) center no-repeat;
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

