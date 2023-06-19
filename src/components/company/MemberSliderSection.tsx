import React from 'react';
import { useState } from "react";
import styled from 'styled-components';
// import MemberModal from "./MemberModal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import MoreIcon from "@/resources/icons/company/icon_member_more.png"
import MemberModal from './MemberModal';

interface IMember{
    name: string;
    jobTitle: string;
    introduction: string;
    image: string;
}

interface IImageBox{
    image: string;
}


const MemberSliderSection = ({result}: {result: IMember[]}) => {
    
    return (
        <>
            <Swiper
                className="memberlist_box"
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    360: {
                        slidesPerView: 1,
                        allowTouchMove: true,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 'auto',
                        allowTouchMove: false,
                        spaceBetween: 0,
                    }
                }}
                observer={true}
                observeParents={true}
            >   
                {result.map((element, idx) => (
                    <SwiperSlide key={idx}>
                        <LinkWrap>
                            <ImageBox
                                image={element.image}
                            >
                                <div>
                                    <i/>
                                    <TextBox>
                                        <p className="ellipsis">
                                            <b>{element.jobTitle}</b>
                                            <span/>
                                            <b>{element.name}</b>
                                        </p>
                                    </TextBox>
                                </div>
                            </ImageBox>
                        </LinkWrap>
                        
                        {/* <button                                
                            value={result.admSeq}
                            onClick={memberPopHandler}
                        >
                            <MemberImg
                                result={result}
                            />
                        </button> */}
                    </SwiperSlide>
                ))}
            </Swiper>
            <MemberModal/>
        </>
    );
};

export default MemberSliderSection;

const LinkWrap = styled.button`
    height: 100%;
    width: 100%;
    background: radial-gradient(circle, rgba(215,215,215,1) 0%, rgba(47,47,47,1) 100%);
    filter: grayscale(1);
    i{
        width: 32px; height: 32px; background: url(${MoreIcon}) center no-repeat; background-size: contain; position: absolute; left: -30px; bottom: 55px; transition: all .3s ease; transform: rotate(0);
    }
    :hover{
        filter: none;
        transition: all .3s ease;
        i{
            left: 30px; transition: all .3s ease; transform: rotate(270deg);
        }
    }
`

const ImageBox = styled.div<IImageBox>`
    background: url(${(props) => props.image}) center no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    overflow: hidden;
    padding: 0 30px 30px;
    position: relative;
    width: 100%;
`

const TextBox = styled.div`
    text-align-last: left;
    p{
        color: #fff;
        font-size: 14px;
        font-weight: 400;
    }
    span{
        background-color: #fff;
        display: inline-block;
        height: 9px;
        width: 1px;
        margin: 0 10px;
    }
`

