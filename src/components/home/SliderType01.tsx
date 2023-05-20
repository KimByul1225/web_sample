import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "@/resources/styles/slider.css";
import SectionTitle from '../commons/SectionTitle';

const SliderType01 = () => {
    return (
        <SliderWrap>
            <Row>
                <SectionTitle
                    title="슬라이더 예시(모바일기기 일때)"
                />
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
                        <Link to="/">
                            <h4>[Lorem ipsum dolor]</h4>
                            <p>Lorem ipsum</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/">
                            <h4>[Lorem ipsum dolor]</h4>
                            <p>Lorem ipsum</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/">
                            <h4>[Lorem ipsum dolor]</h4>
                            <p>Lorem ipsum</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/">
                            <h4>[Lorem ipsum dolor]</h4>
                            <p>Lorem ipsum</p>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </Row>
            
        </SliderWrap>
    );
};

export default SliderType01;


const SliderWrap = styled.section`
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



