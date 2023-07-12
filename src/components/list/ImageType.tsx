import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SubBanner from '../commons/SubBanner';
import Container from '../layout/Container';
import BasicSearch from '../commons/search/BasicSearch';
import ImageRecommendList from './ImageRecommendList';
import { ImageTypeFaker } from '@/resources/faker/list/ImageTypeFaker';
import {ImageRecommendListFaker} from "@/resources/faker/list/ImageRecommendListFaker";
import { useSetRecoilState } from 'recoil';
import { alertState } from '@/global/modal';
import Row from '../layout/Row';
import Pagination from './Pagination';
import NoImg from "@/resources/images/commons/no_image.png";

interface IListData{
    index: number;
    title: string;
    date: Date;
    imgPath: string;
    linkUrl: string;
}

interface ISearchParams {
    startYmd: Date | null;
    endYmd: Date | null;
    searchType: string;
    searchWord: string;
    currentPageNo: number;
}

interface Ibackground{
    background?: string;
}


const ImageType = () => {
    const setAlertModal = useSetRecoilState(alertState);
    const [searchParams, setSearchParams] = useState<ISearchParams>({
        startYmd: null,
        endYmd: null,
        searchType: "both",
        searchWord: "",
        currentPageNo: 1
    });

    const [listData, setListData] = useState<IListData[]>([] as IListData[]);
    const [recommendListData, setRecommendListData] = useState<IListData[]>([] as IListData[]);

    // 게시글 목록갯수 설정
    const limit = 9;
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;



    const onSubmit = (changedSearchParams: ISearchParams) => {
        setSearchParams({
            ...searchParams,
            ...changedSearchParams
        });
        setAlertModal({
            isShow : true,
            modalProps: {
                message: "검색 기능은 Api 연동이 필요합니다.",
                buttonName: "확인",
            }
        })
    }


    useEffect(() => {
        const result = ImageTypeFaker();
        const { resultMap } = result || {};
        const recommendResult = ImageRecommendListFaker();
        const { resultMap: recommendResultMap } = recommendResult || {};
        if (resultMap.result) {
            setListData(resultMap.resultList);
        }
        if (recommendResultMap.result) {
            setRecommendListData(recommendResultMap.resultList);
        }
    }, []);

    return (
        <>
            <SubBanner
                title="게시글 이미지 형태"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <ImageRecommendList
                list={recommendListData}
            />
            <Container>
                <Row>
                    <BasicSearch
                        searchParams={searchParams} 
                        onSubmit={onSubmit}
                    />
                    <ListWrap>
                        <TotalCount>
                            총 <span>{listData.length}</span>건
                        </TotalCount>
                        <ListBox>
                            {
                                listData.slice(offset, offset + limit).map((item) => {
                                    const newDate = new Intl.DateTimeFormat('kr').format(item.date);
                                    return(
                                        <li key={item.index}>
                                            <Link
                                                to={`/list/imageType/${item.index}`}
                                                state={{
                                                    title: item.title,
                                                    date: newDate
                                                }}
                                            >
                                                <BackgroundBox
                                                    background={item.imgPath}
                                                />
                                                <TextBox>
                                                    <h4 className="ellipsis">{item.title}</h4>
                                                    <p>{newDate}</p>
                                                </TextBox>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ListBox>
                    </ListWrap>
                    <Pagination  
                        total={listData.length}
                        limit={limit}
                        page={page}
                        offset={offset}
                        setPage={setPage}
                    />
                </Row>
                

                

            </Container>
            
        </>
    );
};

export default ImageType;

const ListWrap = styled.div`
    margin: 60px 0;
    @media screen and (max-width: 1200px){
        margin: 40px 0;
    }
`

const TotalCount = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 30px;
    span{
        color: #ff4d15;
    }
    @media screen and (max-width: 1200px){
        margin-bottom: 20px;
    }   
    @media screen and (max-width: 768px){
        font-size: 16px;
        margin-bottom: 15px;
    }   
`

const ListBox = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    li{
        margin-bottom: 30px;
        margin-left: 2.6%;
        width: 31.6%;
    }
    li:nth-child(3n-2) {
        margin-left: 0;
    }
    @media screen and (max-width: 768px){
        li{
            margin-bottom: 10px;
            margin-left: 0;
            width: 100%;
        }
        li:nth-child(3n-2) {
            margin-left: 0;
        }
    }
`

const BackgroundBox = styled.div<Ibackground>`
    height: 300px;
    position: relative;
    width: 100%;
    background: #fff url(${(props) => props.background || NoImg}) center no-repeat;
    background-size: cover;
`
const TextBox = styled.div`
    margin-top: 10px;
    padding-bottom: 10px;
    h4{
        color: #313131;
        font-size: 18px;
        font-weight: 500;
    }
    p{
        color: #828282;
        font-size: 16px;
        font-weight: 500;
    }
    @media screen and (max-width: 768px){
        h4{
            font-size: 16px;
            text-align: center;
        }
        p{
            font-size: 14px;
            text-align: center;
        }
    }
`