import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const SliderPaginationComboSection = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <StyledSwiper 
            className="normal_type02"
            breakpoints={{
                360: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    allowTouchMove: true,
                    
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    allowTouchMove: true,
                    
                },
                1200: {
                    slidesPerView: 'auto',
                    spaceBetween: 5,
                    allowTouchMove: false
                },
            }}
            pagination={pagination}
            modules={[Pagination]}
            observer={true}
            observeParents={true}
        >   
            <StyledSwiperSlide>
                <h3>Lorem ipsum 1</h3>
                <div>
                    <p>
                        해당영역은 모바일에서 슬라이더로 변경됩니다. 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </p>
                </div>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
                <h3>Lorem ipsum 2</h3>
                <div>
                    <p>
                        - Lorem ipsum dolor sit amet
                    </p>
                    <p>
                        - Lorem ipsum dolor sit amet
                    </p>
                    <p>
                        - Lorem ipsum dolor sit amet
                    </p>
                    <p>
                        - Lorem ipsum dolor sit amet
                    </p>
                </div>
            </StyledSwiperSlide>
            <StyledSwiperSlide>
                <h3>Lorem ipsum 3</h3>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                </div>
            </StyledSwiperSlide>
        </StyledSwiper> 
    );
};

export default SliderPaginationComboSection;


const StyledSwiper = styled(Swiper)`
    .swiper-wrapper{
        display: flex;
        justify-content: space-between;
    }
`

const StyledSwiperSlide = styled(SwiperSlide)`
    background-color: #fff;
    border: 1px solid #e0e0e0;
    height: 260px;
    padding: 30px;
    width: 32%;
    h3{
        color: #313131;
        font-size: 22px;
        font-weight: 500;
        line-height: 26px;
        padding-top: 18px;
        position: relative;
    }
    h3::before{
        background-color: #ff4d15;
        background-color: var(--col_acc);
        border-radius: 2px;
        content: "";
        height: 8px;
        left: 0;
        position: absolute;
        top: 0;
        width: 8px;
    }
    div{
        margin-top: 20px;
    }
    p{
        color: #828282;
        font-size: 16px;
        font-weight: 400;
        line-height: 27px;
    }

`