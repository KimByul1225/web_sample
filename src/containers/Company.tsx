import React from 'react';
import { Outlet } from 'react-router';

/**
 * @description 기업관련 페이지의 Container (path: "company")
 */

const Company = () => {
    return (
        <>
            <Outlet/>
        </>
    );
};

export default Company;