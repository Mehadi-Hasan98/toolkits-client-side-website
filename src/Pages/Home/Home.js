import React from 'react';
import Footer from '../Shared/Footer';
import About from './About';
import Banner from './Banner';
import BestSelling from './BestSelling';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Reviews></Reviews>
            <BestSelling></BestSelling>
            <BusinessSummary></BusinessSummary>
            <About></About>
        </div>
    );
};

export default Home;