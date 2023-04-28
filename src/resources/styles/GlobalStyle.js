import { createGlobalStyle } from "styled-components";
import PretendardBlackWoff from "../fonts/pretendard/woff/Pretendard-Black.woff";
import PretendardBlackWoff2 from "../fonts/pretendard/woff2/Pretendard-Black.woff2";
import PretendardExtraBoldWoff from "../fonts/pretendard/woff/Pretendard-ExtraBold.woff";
import PretendardExtraBoldWoff2 from "../fonts/pretendard/woff2/Pretendard-ExtraBold.woff2";
import PretendardBoldWoff from "../fonts/pretendard/woff/Pretendard-Bold.woff";
import PretendardBoldWoff2 from "../fonts/pretendard/woff2/Pretendard-Bold.woff2";
import PretendardSemiBoldWoff from "../fonts/pretendard/woff/Pretendard-SemiBold.woff";
import PretendardSemiBoldWoff2 from "../fonts/pretendard/woff2/Pretendard-SemiBold.woff2";
import PretendardMediumWoff from "../fonts/pretendard/woff/Pretendard-Medium.woff";
import PretendardMediumWoff2 from "../fonts/pretendard/woff2/Pretendard-Medium.woff2";
import PretendardRegularWoff from "../fonts/pretendard/woff/Pretendard-Regular.woff";
import PretendardRegularWoff2 from "../fonts/pretendard/woff2/Pretendard-Regular.woff2";
import PretendardLightWoff from "../fonts/pretendard/woff/Pretendard-Light.woff";
import PretendardLightWoff2 from "../fonts/pretendard/woff2/Pretendard-Light.woff2";
import PretendardExtraLightWoff from "../fonts/pretendard/woff/Pretendard-ExtraLight.woff";
import PretendardExtraLightWoff2 from "../fonts/pretendard/woff2/Pretendard-ExtraLight.woff2";
import PretendardThinWoff from "../fonts/pretendard/woff/Pretendard-Thin.woff";
import PretendardThinWoff2 from "../fonts/pretendard/woff2/Pretendard-Thin.woff2";
import MontserratWoff from "../fonts/montserrat/woff/Montserrat-Medium.woff";
import MontserratWoff2 from "../fonts/montserrat/woff2/Montserrat-Medium.woff2";
import GmarketSanstWoff from "../fonts/gmarketsans/woff/GmarketSans-Medium.woff";
import GmarketSanstWoff2 from "../fonts/gmarketsans/woff2/GmarketSans-Medium.woff2";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        font-weight: 900;
        font-display: swap;
        src: local('Pretendard Black'), 
        url(${PretendardBlackWoff}) format('woff'),
        url(${PretendardBlackWoff2}) format('woff2'); 
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 800;
        font-display: swap;
        src: local('Pretendard ExtraBold'), 
        url(${PretendardExtraBoldWoff}) format('woff'),
        url(${PretendardExtraBoldWoff2}) format('woff2'); 
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 700;
        font-display: swap;
        src: local('Pretendard Bold'), 
        url(${PretendardBoldWoff}) format('woff'),
        url(${PretendardBoldWoff2}) format('woff2'); 
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 600;
        font-display: swap;
        src: local('Pretendard SemiBold'), 
        url(${PretendardSemiBoldWoff}) format('woff'),
        url(${PretendardSemiBoldWoff2}) format('woff2'); 
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 500;
        font-display: swap;
        src: local('Pretendard Medium'), 
        url(${PretendardMediumWoff}) format('woff'),
        url(${PretendardMediumWoff2}) format('woff2'); 
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 400;
        font-display: swap;
        src: local('Pretendard Regular'), 
        url(${PretendardRegularWoff}) format('woff'),
        url(${PretendardRegularWoff2}) format('woff2'); 
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 300;
        font-display: swap;
        src: local('Pretendard Light'), 
        url(${PretendardLightWoff}) format('woff'),
        url(${PretendardLightWoff2}) format('woff2'); 
        
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 200;
        font-display: swap;
        src: local('Pretendard ExtraLight'), 
        url(${PretendardExtraLightWoff}) format('woff'),
        url(${PretendardExtraLightWoff2}) format('woff2'); 
    }
    @font-face {
        font-family: 'Pretendard';
        font-weight: 100;
        font-display: swap;
        src: local('Pretendard Thin'), 
        url(${PretendardThinWoff}) format('woff'),
        url(${PretendardThinWoff2}) format('woff2');
        
    }

    @font-face {
        font-family: 'Montserrat';
        font-weight: 500;
        font-display: swap;
        src: local('Montserrat Medium'), 
        url(${MontserratWoff}) format('woff'),
        url(${MontserratWoff2}) format('woff2');
    }

    @font-face {
        font-family: 'Gmarket Sans';
        font-weight: 500;
        font-display: swap;
        src: local(''), 
        url(${GmarketSanstWoff}) format('woff'), 
        url(${GmarketSanstWoff2}) format('woff2');
    }


    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a{text-decoration: none;}
    button{padding: 0; cursor: pointer; border: none; font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;}

    *, html{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;}
    *, *:before, *:after{box-sizing: border-box;-webkit-box-sizing: border-box;-moz-box-sizing: border-box}
    body{margin:0 auto;font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-size:1rem;line-height:1.5;color:#000;letter-spacing:-0.002em; -webkit-text-size-adjust:none; position: relative;}
`