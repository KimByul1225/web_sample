import React, { ReactNode } from 'react';
import styled from 'styled-components';

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
