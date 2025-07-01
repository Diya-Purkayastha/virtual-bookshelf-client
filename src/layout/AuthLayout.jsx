import React from 'react';
import { NavLink, Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='flex flex-col md:flex-row'>

            <div className='flex-1'>
                <Outlet></Outlet>
            </div>

            {/* Right Side - Decorative Welcome */}
            <div className="flex-1 relative overflow-hidden text-base-content">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90 z-0"></div>

                {/* Blur blob */}
                <div className="absolute w-72 h-72 bg-white opacity-10 rounded-full top-10 right-10 blur-3xl z-0"></div>

                {/* Text content */}
                <div className="relative z-10 flex items-center justify-center h-full px-6 py-12 text-center text-neutral">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Welcome to VRbooK</h1>
                        <p className="text-lg leading-relaxed">
                            Discover and track your favorite books, update your progress, and reflect on the stories that move you.
                        </p>
                        <p className="text-sm opacity-80">
                            Connect with your bookshelf anytime, anywhere — powered by imagination and technology.
                        </p>
                        <NavLink to='/'><button className='btn btn-primary'>Back to Home</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;