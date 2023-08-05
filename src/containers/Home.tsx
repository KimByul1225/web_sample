import React from 'react';

import Banner from '@/components/home/Banner';
import ButtonType from '@/components/home/ButtonType';
import SliderType01 from '@/components/home/SliderType01';
import SliderType03 from '@/components/home/SliderType03';
import TabMenu from '@/components/home/TabMenu';

/**
 * @description 메인페이지의 Container
 */

const Home = () => {
    return (
        <>
            <Banner/>
            <SliderType01/>
            <TabMenu/>
            <SliderType03/>
            <ButtonType/>
        </>
    );
};

export default Home;