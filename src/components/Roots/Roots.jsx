import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Roots = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;