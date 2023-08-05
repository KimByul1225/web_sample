import React from 'react';
import { Outlet } from 'react-router';

/**
 * @description 소개 페이지의 Container (path: "introduction")
 */

const Introduction = () => {
    return (
        <>
            <Outlet/>
        </>
    );
};

export default Introduction;