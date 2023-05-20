import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SectionTitle from '../commons/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import arrowIcon from "@/resources/icons/home/icon_slider_type03_arrow.png";
import { SliderType03Faker } from '@/resources/faker/home/SliderType03Faker';
import { GradeColors } from '@/values/commons/grade';
import { GradeType } from '@/types/commons/grade';

interface ISlider{
    companyName: string;
    keword: string;
    keword02: string;
    grade: GradeType;
    grade02: GradeType;
    linkUrl: string;
}

interface IGrade{
    gradeColor?: string;
}

const SliderType03 = () => {
    const [sliderData, setSliderData] = useState<ISlider[]>([]);
    const swiperRef = useRef(null);
    const pagination = {
        clickable: true,
        renderBullet: function (index:number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    useEffect(() => {
        const result = SliderType03Faker();
        const { resultMap } = result || {}
        if (resultMap.result) {
            setSliderData(resultMap.resultList);
        }
    }, []);

    return (
        <Wrap>
            <Row>
                <SectionTitle
                    title="슬라이더 예시2(모바일기기 일때)"
                />
                <Swiper
                    className="type03_swiper"
                    slidesPerView={"auto"}
                    ref={swiperRef}
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
                    pagination={pagination}
                    modules={[Pagination]}
                    observer={true}
                    observeParents={true}
                >
                    {
                        sliderData.length > 0 &&  sliderData.map((result, index) => {
                            const color = GradeColors[result.grade];
                            const color02 = GradeColors[result.grade02];
                            return(
                                <SwiperSlide 
                                    key={index}
                                    className="type03_box"
                                > 
                                    <BoxTitle>{result.companyName}</BoxTitle>
                                    <ListWrap>
                                        <li>
                                            <p>키워드1</p>
                                            <span>{result.keword}</span>
                                        </li>
                                        <li>
                                            <p>등급1</p>
                                            <span>
                                                <Grade
                                                    gradeColor={color}
                                                >
                                                    {result.grade}
                                                </Grade>
                                            </span>
                                        </li>
                                        <li>
                                            <p>키워드2</p>
                                            <span>{result.keword02}</span>
                                        </li>
                                        <li>
                                            <p>등급2</p>
                                            <span>
                                                <Grade
                                                    gradeColor={color02}
                                                >
                                                    {result.grade02}
                                                </Grade>
                                                </span>
                                        </li>
                                    </ListWrap>
                                    <MoreView to="/">바로가기</MoreView>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Row>
            
        </Wrap>
    );
};
export default SliderType03;

const Wrap = styled.section`
    padding: 100px 0; background-color: #fff;
    @media screen and (max-width: 1200px) {
        padding: 80px 0;
    }
    @media screen and (max-width: 768px) {
        padding: 50px 0;
    }
`

const Row = styled.div`
    max-width: 1200px; margin: 0 auto;
    @media screen and (max-width: 1200px) {
        padding: 0 20px;
    }
    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
`

const BoxTitle = styled.h4`
    font-size: 24px; font-weight: 700; margin-bottom: 30px;
    @media screen and (max-width: 1200px) {
        font-size: 22px; margin-bottom: 10px;
    }
    @media screen and (max-width: 768px) {
        font-size: 18px; margin-bottom: 10px;
    }
`

const ListWrap = styled.ul`
    display: flex; flex-wrap: wrap; justify-content: space-between;
    li{
        display: flex; align-items: center;
        p{
            display: inline-block;
            font: var(--b1);
        }
        span{
            display: inline-block;
            font: var(--b1); font-weight: 700;
        }
    }
    li:nth-child(odd){
        width: 50%;
        p{
            width: 50%;
        }
    }
    li:nth-child(even){
        width: 37%;
        p{
            width: 70%;
        }
    }
    li:nth-child(3), li:nth-child(4){
        margin-top: 20px;
    }
    @media screen and (max-width: 1200px) {
        flex-direction: column;
        li{
            margin-top: 20px;
            p{
                font-size: 18px;
            }
            span{
                font-size: 18px;
            }
        }
        li:nth-child(odd){
            width: 70%;
        }
        li:nth-child(even){
            width: 70%;
            p{
                width: 50%;
            }
        }
    }
    @media screen and (max-width: 768px) {
        li{
            margin-top: 30px;
            p{
                font-size: 16px;
            }
            span{
                font-size: 16px;
            }
        }
        li:nth-child(3), li:nth-child(4){
            margin-top: 30px;
        }
        li:nth-child(odd), li:nth-child(even){
            width: 80%;
        }
    }
`
const Grade = styled.b<IGrade>`
    color: ${(props) => props.gradeColor || "#000"};
    text-transform: uppercase;
`
const MoreView = styled(Link)`
    position: absolute; 
    left: 0; 
    bottom: 0; 
    width: 100%; 
    height: 50px; 
    background: #6A717A url(${arrowIcon}) center right 10px no-repeat;
    background-size:25px; 
    color: #fff; 
    font-size: var(--b2); 
    text-align: right; 
    padding-right: 35px; 
    line-height: 50px;
    :hover{
        background: var(--col_acc) url(${arrowIcon}) center right 10px no-repeat;
        background-size: 25px; 
        transition: all .2s ease;}
`

