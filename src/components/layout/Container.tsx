import React, { ReactNode } from 'react';
import styled from 'styled-components';

/**
 * @description Container 컴포넌트. 각 페이지 별 상하 여백을 주기 위한 컴포넌트
 */

const Container = ({children}:{children: ReactNode}) => {
    return (
        <ContainterSection>
            {children}
        </ContainterSection>
    );
};

export default Container;


const ContainterSection = styled.div`
    padding: 120px 0;
    @media screen and (max-width: 1200px){
        padding: 80px 0;
    }
    @media screen and (max-width: 1200px){
        padding: 50px 0;
    }

`
