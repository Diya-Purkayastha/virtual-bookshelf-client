import React from 'react';
import { NavLink } from 'react-router';

const PromotionalBanner = () => {
    return (
        <div className="container mx-auto px-4 mt-30  ">
            <div className="relative w-full  rounded-xl overflow-hidden">

                {/* 📸 Background image with promo content */}
                <div
                    className="w-full bg-cover bg-center py-24 relative z-10 rounded-xl"
                    style={{ backgroundImage: "url('https://i.ibb.co/cSZZZxSm/clara-azevedo-cfj-Tv5f-IJUg-unsplash.jpg')" }}
                >
                     {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-40 z-0"></div>

                    <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-6 text-center lg:text-left px-4 ">
                        <div className='max-w-xl text-center'>
                            <h2 className="text-4xl font-bold mb-2 text-primary">Limited-Time Book Box 🎁</h2>
                            <small className=" text-base font-semibold  text-gray-800">
                                Available this month only • While supplies last
                            </small>
                            <p className="text-sm text-gray-800 font-light mt-2">
                               Grab our exclusive curated Book Box — packed with handpicked novels, bookmarks, reading planners, and more! Only available for registered users.
                            </p>
                            
                        </div>
                        <NavLink to='/'><button className="btn btn-primary mt-4 lg:mt-0">Claim Your Box</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromotionalBanner;