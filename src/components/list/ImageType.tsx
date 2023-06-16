import React, { useEffect, useState } from 'react';
import SubBanner from '../commons/SubBanner';
import Container from '../layout/Container';
import BasicSearch from '../commons/search/BasicSearch';
import ImageRecommendList from './ImageRecommendList';
import { ImageTypeFaker } from '@/resources/faker/list/ImageTypeFaker';
import {ImageRecommendListFaker} from "@/resources/faker/list/ImageRecommendListFaker";


interface IListData{
    index: number;
    title: string;
    date: Date;
    imgPath: string;
    linkUrl: string;
}


const ImageType = () => {
    const [listData, setListData] = useState<IListData[]>([] as IListData[]);
    const [recommendListData, setRecommendListData] = useState<IListData[]>([] as IListData[]);





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

                {/* <BasicSearch
                
                /> */}

            </Container>
            
        </>
    );
};

export default ImageType;