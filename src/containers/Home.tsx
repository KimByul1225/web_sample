import Banner from '@/components/home/Banner';
import ButtonType from '@/components/home/ButtonType';
import SliderType01 from '@/components/home/SliderType01';
import SliderType02 from '@/components/home/SliderType02';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Banner/>
            <SliderType01/>
            <SliderType02/>
            <ButtonType/>
        </div>
    );
};

export default Home;