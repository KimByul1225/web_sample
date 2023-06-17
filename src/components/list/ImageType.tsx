import React, { useEffect, useState } from 'react';
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
                    <TotalCount>
                        총 <span>{listData.length}</span>건
                    </TotalCount>

                    {
                        listData.slice(offset, offset + limit).map((item) => {
                            const newDate = new Intl.DateTimeFormat('kr').format(item.date);
                            return(
                                <div key={item.index}>
                                    {item.index} / {item.title} / {newDate}
                                </div>
                            )
                        })
                    }

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


const TotalCount = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 30px;
    span{
        color: #ff4d15!important;
    }
    @media screen and (max-width: 1200px){
        margin-bottom: 20px;
    }   
    @media screen and (max-width: 768px){
        font-size: 16px;
        margin-bottom: 15px;
    }   
`