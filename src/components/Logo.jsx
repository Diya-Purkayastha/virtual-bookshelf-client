import React from 'react';
import logo from '../../public/logo.png'

const Logo = () => {
    return (
        <div className='flex gap-1 items-center'>
            <img src={logo} alt="" className="w-10 rounded-full"/>
            <a className=" text-xl cursor-pointer" href='/' ><div className="md:text-3xl text-neutral font-medium"><h1>VRbooK</h1></div></a>
        </div>
    );
};

export default Logo;