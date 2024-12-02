import React from 'react';
import Cards from './Cards/Cards';
import Banner from './Banner'
import Faq from './Faq';
import Contact from './Contact';

const HomePages = () => {
    return (
        <div>
            <Banner/>
            <Cards/>
            <Faq/>
            <Contact/>
        </div>
    );
};

export default HomePages;