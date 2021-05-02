import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import BlogSection from '../BlogSection/BlogSection';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import ProjectSection from '../ProjectSection/ProjectSection';

const Home = () => {
    return (
        <div>
            <Header />
            <HeaderMain />
            <ProjectSection />
            <BlogSection />
            <Footer />
        </div>
    );
};

export default Home;