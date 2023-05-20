import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';
import { SliderType02Faker } from '@/resources/faker/home/SliderType02Faker';
import Logo from "@/resources/images/commons/logo_black.png";
import NoImg from "@/resources/images/commons/no_image.png"

interface ILinkWrap{
    background?: string;
}

interface ISlider{
    title: string;
    date: Date;
    imgPath: string;
    linkUrl: string;
}

const SliderType02 = ({menuIndex}: {menuIndex: number}) => {
    const [sliderData, setSliderData] = useState<ISlider[]>([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        const result = SliderType02Faker();
        const { resultMap } = result || {}
        console.log("data", resultMap);
        if (resultMap.result) {
            setSliderData(resultMap.resultList);
        }
    }, [menuIndex]);

    return (
        <Swiper
            ref={swiperRef}
            className="type02_swiper"
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
                <NoList>
                    리스트가 없습니다.
                </NoList>
            }
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
        background: url(${(props) => props.background || NoImg}) center no-repeat;
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
        h4{
            font-size: 16px; margin-top: 10px; margin-bottom: 5px;
        }
        p{
            font-size: 14px;
        }
    }
`
const NoList = styled.div`
    color: #fff; 
    height: 358px; 
    text-align: center; 
    background: url(${Logo}) top 100px  center no-repeat; 
    background-size: 260px 70px;
    font-size: 18px; 
    font-weight: 500; 
    padding-top: 200px;
`
