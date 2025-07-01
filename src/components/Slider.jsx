import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../components/css/slider.css'
import { NavLink } from 'react-router';
import { Fade, Slide } from "react-awesome-reveal";

const Slider = () => {
    return (
        <div className="w-full h-[80vh] group relative ">
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="h-full"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                     <div
                        className="relative h-[500px] md:h-[80vh] w-full bg-cover bg-center flex items-center "
                        style={{
                            backgroundImage: "url('https://i.ibb.co/1JXrWrtz/andrew-draper-GI51-PEwz2-Hw-unsplash.jpg')",
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/70 opacity-40 z-0"></div>

                    <div className=" relative z-10  flex flex-col md:flex-row items-center justify-between h-full w-full overflow-hidden px-8 md:px-16">

                        {/* Left Text Content */}
                        
                        <div className="md:w-1/2 text-center md:text-left py-12 md:pl-10 space-y-6">
                        <Fade direction='down' delay={300}>
                            <h1 className="text-4xl md:text-6xl font-light text-base-content leading-tight  ">
                                Middle-earth <br />
                                <span className="font-bold">Adventure Box</span>
                            </h1>
                            </Fade>
                            <Fade>
                            <ul className="space-y-2 text-base-content text-base ">
                                <li>🗺️ Includes Map of the Shire & Beyond</li>
                                <li>🧙‍♂️ Gandalf's Magical Quote Cards</li>
                                <li>💍 Collector's Mini One Ring Replica</li>
                            </ul>
                            </Fade>
                            <Fade direction='up' delay={300}>
                                <NavLink to='/bookshelf'><button className="bg-gray-800 text-white px-6 py-3 mt-4 hover:bg-gray-900">
                                VIEW BOOK
                            </button></NavLink>
                            </Fade>
                            
                        </div>
                       

                        {/* Right Image */}
                        
                            <div className="hidden md:flex md:w-1/2 items-center justify-center h-full ">
                   
                            <img
                                src="https://i.ibb.co/SDrQ3mjh/s1.jpg"
                                alt="book"
                                className="max-h-[500px] w-auto object-contain border-r-8 border-primary border-b-8 shadow-2xl rounded-2xl"
                            />
                            
                        </div>
                        
                        
                    </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                     <div
                        className="relative h-[500px] md:h-[80vh] w-full bg-cover bg-center flex items-center "
                        style={{
                            backgroundImage: "url('https://i.ibb.co/8gvxTC66/marjhon-obsioma-gwzzi-26-K-k-unsplash.jpg')",
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/70 opacity-40 z-0"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full w-full overflow-hidden px-8 md:px-16">
                        <div className="md:w-1/2 text-center md:text-left py-12 md:pl-10 space-y-6">
                        <Fade direction='down' delay={300}>
                            <h1 className="text-4xl md:text-6xl font-light text-base-content leading-tight">
                                Regency Romance <br />
                                <span className="font-bold">Collector's Crate</span>
                            </h1>
                        </Fade>
                            
                            <Fade >
                                <ul className="space-y-2 text-base-content text-base">
                                <li>💌 Elegant Letter Set & Quill Pen</li>
                                <li>🎩 Mr. Darcy’s Favorite Tea Blend</li>
                                <li>📖 Limited Edition Book Cover Print</li>
                            </ul>
                            </Fade>
                            
                                <Fade direction='up' delay={300}>
                                    <NavLink to='/bookshelf'><button className="bg-secondary text-white px-6 py-3 mt-4 ">
                                VIEW BOOK
                            </button></NavLink>
                                </Fade>
                            
                        </div>

                
                        <div className="hidden md:flex md:w-1/2 items-center justify-center h-full ">
                   
                            <img
                               src="https://i.ibb.co/sJ9J6bzF/s3.jpg"
                                alt="book"
                                className="max-h-[500px] w-auto object-contain border-r-8 border-primary border-b-8 shadow-2xl rounded-2xl"
                            />
                            
                        </div>
                    </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                     <div
                        className="relative h-[500px] md:h-[80vh] w-full bg-cover bg-center flex items-center "
                        style={{
                            backgroundImage: "url('https://i.ibb.co/jPzvTx9f/edoardo-botez-2-SBBsa2n-Ma-E-unsplash.jpg')",
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/70 opacity-40 z-0"></div>

                    <div className=" relative z-10 flex flex-col md:flex-row items-center justify-between h-full w-full overflow-hidden px-8 md:px-16 ">
                        <div className="md:w-1/2 text-center md:text-left py-12 md:pl-10 space-y-6">
                        <Fade direction='down' delay={300}> 
                             <h1 className="text-4xl md:text-6xl font-light text-base-content leading-tight">
                                Big Brother <br />
                                <span className="font-bold">Surveillance Set</span>
                            </h1>
                        </Fade>
                           
                            <Fade>
                                <ul className="space-y-2 text-base-content text-base">
                                <li>📘 Dystopian Journal & Bookmark</li>
                                <li>🎥 "You Are Watched" Poster Pack</li>
                                <li>🔐 Privacy Sticker & Locking Diary</li>
                            </ul>
                            </Fade>
                            <Fade direction='up' delay={300}> 
                                <NavLink to='/bookshelf'><button className="bg-primary text-white px-6 py-3 mt-4 ">
                                VIEW BOOK
                            </button></NavLink>
                            </Fade>
                            
                            
                        </div>

                            <div className="hidden md:flex md:w-1/2 items-center justify-center h-full ">
                   
                            <img
                               src="https://i.ibb.co/twkLJwxD/s2.jpg"
                                alt="book"
                                className="max-h-[500px] w-auto object-contain border-r-8 border-primary border-b-8 shadow-2xl rounded-2xl"
                            />
                            
                        </div>
                          
                    </div>
                    </div>
                </SwiperSlide>

                
            </Swiper>
        </div>
    );
};

export default Slider;