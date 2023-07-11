import React from 'react';
import styled from 'styled-components';

import Container from '@/components/layout/Container';
import Row from '@/components/layout/Row';


const Terms = () => {
    return (
        <>
            <Title>
                <Row>
                    <h2>이용약관</h2>
                </Row>
            </Title>
            <Container>
                <Row>
                    <TextBox>
                        <h3>
                            1. Lorem ipsum dolor sit 
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        </p>
                        <h3>
                            2. Lorem ipsum dolor 
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        </p>
                        <h3>
                            3. Lorem ipsum dolor sit amet, consectetur adipiscing
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <h3>
                            4. Lorem ipsum dolor sit 
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        </p>
                    </TextBox>
                </Row>
            </Container>
        </>
    )
}

export default Terms


const Title = styled.h2`
    padding: 120px 0 20px 0;
    border-bottom: 1px solid #E0E0E0;
    h2{
        font-size: 44px;
        font-weight: 700;
        color: #313131;
        text-align: center;
        line-height: 75px;
    }
    @media screen and (max-width: 1200px){
        h2{
            font-size: 22px;
            line-height: 30px;
        }
    }
`
const TextBox = styled.div`
    border-top: 1px solid #4F4F4F;
    padding-top: 20px;
    h3{
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
        margin-top: 30px;
    }
    p{
        color: #4F4F4F;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
    }
    @media screen and (max-width: 768px){
        h3{
            margin-top: 20px;
            font-size: 14px;
            line-height: 25px;
        }
        p{
            font-size: 12px;
            line-height: 20px;
        }
    }

`