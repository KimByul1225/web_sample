import React, { ReactNode } from 'react';
import styled from 'styled-components';

/**
 * @description Row 컴포넌트. 각 페이지 별 내용이 들어가는 가로 길이를 제한하기 위한 컴포넌트
 */

const Row = ({children}:{children: ReactNode}) => {
    return (
        <RowSection>
            {children}
        </RowSection>
    );
};

export default Row;


const RowSection = styled.div`
    max-width: 1200px; margin: 0 auto;
    position: relative;
    @media screen and (max-width: 1200px){
        max-width: 100%; padding: 0 20px;
    }


`

