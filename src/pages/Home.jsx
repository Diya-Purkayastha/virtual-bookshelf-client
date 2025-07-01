import React from 'react';
import Slider from '../components/Slider';
import PopularBooks from '../components/PopularBooks';
import FeaturedCategory from '../components/FeaturedCategory';
import AdditionalSections from '../components/AdditionalSections';
import PromotionalBanner from '../components/PromotionalBanner';
import Newsletter from '../components/Newsletter';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularBooks></PopularBooks>
            <FeaturedCategory></FeaturedCategory>
            <AdditionalSections></AdditionalSections>
            <PromotionalBanner></PromotionalBanner>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;