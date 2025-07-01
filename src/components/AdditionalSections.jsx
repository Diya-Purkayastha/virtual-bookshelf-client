import Lottie from 'lottie-react';
import React from 'react';
import why from '../assets/animation/why2.json'
import { NavLink } from 'react-router';
import { Fade } from 'react-awesome-reveal';


const AdditionalSections = () => {
    return (
        <div>
            <Fade direction='up' delay={300} triggerOnce> 
            <section className=" container mx-auto px-4 py-20 md:py-28 ">
                <div className="max-w-4xl mx-auto px-4 py-14 text-center  border-b border-t">
                    <h2 className="text-3xl font-bold text-primary mb-4">📘 Track Your Reading Goals</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Stay motivated and build a consistent reading habit by organizing your progress into
                        <span className="text-primary font-semibold"> Want to Read</span>,
                        <span className="text-primary font-semibold"> Reading</span>, and
                        <span className="text-primary font-semibold"> Read</span> categories.
                        Monitor your journey and celebrate your milestones.
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                        <NavLink to='/bookshelf'><button  className="btn btn-primary btn-sm">Start a New Goal</button></NavLink>
                        <NavLink to='/bookshelf'><button className="btn btn-accent btn-sm">View My Books</button></NavLink>
                        
                    </div>
                </div>
            </section>
            </Fade>
                  <Fade direction='up' delay={300} triggerOnce> 
            <section className="bg-neutral py-20 md:py-28 my-8">
                
                <div className="flex flex-col md:flex-row items-center container mx-auto bg-base-200 rounded-lg shadow-lg overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-40 bg-primary blur-3xl opacity-30 z-0" />
                    {/* Left Side - Illustration */}
                    
                    <div className="md:w-1/2 w-full">
                       
                        <Lottie animationData={why}></Lottie>
                    </div>
                  
                  

                    {/* Right Side - Text */}
                    <div className="md:w-1/2 w-full p-8 text-gray-700 space-y-5">
                        <h2 className="text-3xl font-bold text-primary mb-2">Why Choose BookShelf?</h2>
                        <ul className="space-y-3 list-disc list-inside text-base">
                            <li>Organize your reading into clear, trackable statuses.</li>
                            <li>See what others are loving with upvoted books.</li>
                            <li>Write and explore honest book reviews.</li>
                            <li>Keep your reading private and secure.</li>
                            <li>Get visual insights into your progress.</li>
                            <li>Enjoy a fast, clean UI on all devices.</li>
                        </ul>
                    </div>
                </div>
            </section>
            </Fade>

        </div>
    );
};

export default AdditionalSections;