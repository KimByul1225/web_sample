import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import "swiper/css";
import Container from '../layout/Container';
import DecoTitle from '../commons/DecoTitle';
import Icon01 from "@/resources/icons/introducation/icon_slider_01.png";
import Icon02 from "@/resources/icons/introducation/icon_slider_02.png";
import Icon03 from "@/resources/icons/introducation/icon_slider_03.png";

const SliderSection = ({className}: {className?:string}) => {
    return (
        <Container>
            <SliderRow>
                <StyledDecoTitle
                    text="해당 영역은 모바일에서 슬라이더 입니다."
                    as={DecoTitle}
                    className={className}
                    underline
                />
                <StyledSwiper 
                    breakpoints={{
                        360: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            allowTouchMove: true,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10, 
                            allowTouchMove: true,                                
                        },
                        1200: {
                            slidesPerView: 'auto',
                            spaceBetween: 5,
                            allowTouchMove: false,
                        },
                    }}
                    observer={true}
                    observeParents={true}
                >
                    <StyledSwiperSlide>
                        <i></i>
                        <h4>
                            Lorem ipsum01
                        </h4>
                        <ul className="list_box">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <i></i>
                        <h4>
                            Lorem ipsum02
                        </h4>
                        <ul className="list_box">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <i></i>
                        <h4>
                            Lorem ipsum03
                        </h4>
                        <ul className="list_box">
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                            <li>Lorem ipsum</li>
                        </ul>
                    </StyledSwiperSlide>
                    
                </StyledSwiper>
            </SliderRow>
        </Container>
    );
};

export default SliderSection;


const SliderRow = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    @media screen and (max-width: 1200px){
        max-width: 100%;
    }
`

const StyledDecoTitle = styled(DecoTitle)`
    margin: 0 0 0 20px;
`

const StyledSwiper = styled(Swiper)`
    padding: 0 20px;
    margin-top: 80px;
    .swiper-wrapper {
        display: flex;
        justify-content: space-between;
    }
    @media screen and (max-width: 1200px){
        margin-top: 40px;
    }
    @media screen and (max-width: 768px){
    }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
    width: 31.6%;
    height: 380px;
    border: 1px solid #F2F2F2;
    border-radius: 60px 0px;
    padding: 50px 30px;
    i{
        display:block; width: 100px; height: 100px; background: url(${Icon01}) center no-repeat; background-size: contain;
    }
    :nth-child(2) i{
        background: url(${Icon02}) center no-repeat; background-size: contain;
    }
    :last-child i{
        background: url(${Icon03}) center no-repeat; background-size: contain;
    }
    h4{
        margin-top: 20px;
        font-size: 22px;
        font-weight: 400;
        color: #313131;
    }
    ul{
        margin-top: 20px;
        padding-left: 25px;
        li{
            font-size: 16px;
            font-weight: 400;
            color: #828282;
            list-style: disc;
            line-height: 27px;
        }
    }

`