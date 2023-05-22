import React, { ReactNode } from 'react';
import styled from 'styled-components';

const MainLayout = ({children}: {children: ReactNode}) => {
    return (
        <MainWrap>
            {children}
        </MainWrap>
    );
};
export default MainLayout;

const MainWrap = styled.main`
    padding-top: 90px;
    @media screen and (max-width: 1200px) {
        padding-top: 80px;
    }
    @media screen and (max-width: 768px) {
        padding-top: 60px;
    }

`