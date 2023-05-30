import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Icon01 from "@/resources/icons/company/icon_company_int01.png";
import Icon02 from "@/resources/icons/company/icon_company_int02.png";
import Icon03 from "@/resources/icons/company/icon_company_int03.png";
import Row from '../layout/Row';

const SliderSection = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index:number, className:string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <SliderContainer>
            <Row>
                <StyledSwiper 
                    className="normal_type02"
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
                    pagination={pagination}
                    modules={[Pagination]}
                >   
                    <StyledSwiperSlide>
                        <span/>
                        <div>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <span/>
                        <div>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <span/>
                        <div>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </StyledSwiperSlide>
                    
                    
                </StyledSwiper> 

            </Row>
        </SliderContainer>

        
    );
};

export default SliderSection;


const SliderContainer = styled.div`
    background-color: #f9f9f9;
    padding: 120px 0;
    @media screen and (max-width: 1200px){
        padding: 80px 0;
    }
    @media screen and (max-width: 768px){
        padding: 50px 0;
    }
`


const StyledSwiper = styled(Swiper)`
    .swiper-wrapper{
        display: flex;
        justify-content: space-between;
    }
    @media screen and (max-width: 1200px){
        padding: 0 20px;
    }
    @media screen and (max-width: 768px){
        padding: 0;
    }
`



const StyledSwiperSlide = styled(SwiperSlide)`
    background: #fff url(${Icon01}) top 82px center no-repeat;
    background-size: 100px;
    align-items: center;
    border: 1px solid #f2f2f2;
    border-radius: 60px 0;
    display: flex;
    flex-direction: column;
    height: 420px;
    justify-content: flex-end;
    padding: 80px 70px;
    width: 28.3%;
    :nth-child(2){
        background: #fff url(${Icon02}) top 82px center no-repeat;
        background-size: 100px;
        span{
            background-color: #27ae60;;
        }
    }
    :nth-child(3){
        background: #fff url(${Icon03}) top 82px center no-repeat;
        background-size: 100px;
        span{
            background-color: #2d9cdb;;
        }
    }
    span{
        background-color: #f2994a;
        border-radius: 3px;
        display: block;
        height: 2px;
        width: 50px;
    }
    
    div{   
        margin-top: 50px;
        width: 100%;
    }
    p{
        color: #4f4f4f;
        font-size: 18px;
        font-weight: 500;
        text-align: center;
    }



`