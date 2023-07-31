import React, { ReactNode } from 'react';
import styled from 'styled-components';

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

