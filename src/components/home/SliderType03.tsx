import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SectionTitle from '../commons/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const SliderType03 = () => {
    const swiperRef = useRef(null);

    const pagination = {
        el: '.swiper-pagination-bullets',
        clickable: true,
        renderBullet: function (index:number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <Wrap>
            <Row>
                <SectionTitle
                    title="tttt"
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
                    <SwiperSlide 
                        className="type03_box"
                    > 
                        <BoxTitle>타이틀</BoxTitle>



                        <ListWrap>
                            <li>
                                <span className='esglist_tit'>종목코드</span>
                                <span className='esglist_txt'>종목코드56151561</span>
                            </li>
                            <li>
                                <span className='esglist_tit'>규모등급</span>
                                <span 
                                    
                                >51651</span>
                            </li>
                            <li>
                                <span className='esglist_tit'>자산규모</span>
                                <span className='esglist_txt'>자산규모515616</span>
                            </li>
                            <li>
                                <span className='esglist_tit'>전체등급</span>
                                <span>
                                    4111651
                                </span>

                            </li>
                        </ListWrap>

                        <Link to="/" className="esg_more">바로가기</Link>


                    </SwiperSlide>


                    {/* {resultList.map((result, idx) =>(
                        <SwiperSlide 
                            className="esg_box"
                            key={idx} 
                        > 
                            <h4>{result.unvrsNm}</h4>
                            <ul>
                                <li>
                                    <span className='esglist_tit'>종목코드</span>
                                    <span className='esglist_txt'>{result.asymbol.substring(1)}</span>
                                </li>
                                <li>
                                    <span className='esglist_tit'>규모등급</span>
                                    <span 
                                        className={"esglist_txt esglist_lv" + result.scaleLvResult }
                                    >{result.scaleLvResult}</span>
                                </li>
                                <li>
                                    <span className='esglist_tit'>자산규모</span>
                                    <span className='esglist_txt'>{result.assetScale}</span>
                                </li>
                                <li>
                                    <span className='esglist_tit'>전체등급</span>
                                    <span
                                        className={"esglist_txt esglist_lv" + result.allLvResult }
                                    >
                                        {result.allLvResult}
                                    </span>

                                </li>
                            </ul>
                            <Link to="/esg-ratings" className="esg_more">바로가기</Link>
                        </SwiperSlide>
                    ))} */}
                    <div className='pagination_esg'>
                        <div className="swiper-pagination-bullets">
                        </div>
                    </div>
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
    }
    li:nth-child(odd){
        width: 50%;
    }
    li:nth-child(even){
        width: 37%;
    }
    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }
    @media screen and (max-width: 768px) {

    }
`





// .pagination_esg{text-align: center; display: none;}
// .pagination_esg .swiper-pagination-bullet{font-size: 0; background-color: #D9D9D9; opacity: 1;}
// .pagination_esg .swiper-pagination-bullet-active{background-color: #000;}


// .esg_box h4{}

// .esg_box ul{}
// .esg_box ul li{}
// .esg_box ul li:nth-child(odd){}
// .esg_box ul li:nth-child(even){}

// .esg_box ul li:nth-child(3), .esg_box ul li:nth-child(4){margin-top: 20px;}

// .esg_box span{display: inline-block;}
// .esg_box .esglist_tit{font: var(--b1);}
// .esg_box ul li:nth-child(odd) .esglist_tit{width: 50%;}
// .esg_box ul li:nth-child(even) .esglist_tit{width: 70%;}
// .esg_box .esglist_txt{font: var(--b1); font-weight: 700;}


/* .esg_box .esglist_lv{color: var(--col_acc);}
.esg_box .esglist_lv.col_blue{color: #3658CF;} */
// .esg_box .esglist_lvAA{color: #2F80ED;}
// .esg_box .esglist_lvA{color: #2D9CDB;}
// .esg_box .esglist_lvBB{color: #219653;}
// .esg_box .esglist_lvB{color: #27AE60;}
// .esg_box .esglist_lvC{color: #F7CF46;}
// .esg_box .esglist_lvD{color: #F2994A;}
// .esg_box .esglist_lvE{color: var(--col_acc);}


// .esg_box .esg_more{position: absolute; left: 0; bottom: 0; width: 100%; height: 50px; background: #6A717A url(../img/icon_mainesg_arrow.png) center right 10px no-repeat; background-size:25px; color: #fff; font-size: var(--b2); text-align: right; padding-right: 35px; line-height: 50px;}
// .esg_box .esg_more:hover{background: var(--col_acc) url(../img/icon_mainesg_arrow.png) center right 10px no-repeat; background-size: 25px; transition: all .2s ease;}
// .esg_date{font-size: 16px; color: #4F4F4F; text-align: center; margin-top: 10px;}
