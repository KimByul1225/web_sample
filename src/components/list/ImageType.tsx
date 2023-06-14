import React from 'react';
import SubBanner from '../commons/SubBanner';
import Container from '../layout/Container';
import BasicSearch from '../commons/search/BasicSearch';
import ImageRecommendList from './ImageRecommendList';

const ImageType = () => {
    return (
        <>
            <SubBanner
                title="게시글 이미지 형태"
                lineText01="Lorem ipsum dolor sit amet, consectetur"
                lineText02="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            /> 
            <ImageRecommendList/>

            <Container>

                {/* <BasicSearch
                
                /> */}

            </Container>
            
        </>
    );
};

export default ImageType;