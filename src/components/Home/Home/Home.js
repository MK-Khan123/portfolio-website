import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import BlogSection from '../BlogSection/BlogSection';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import MyResume from '../MyResume/MyResume';
import ProjectSection from '../ProjectSection/ProjectSection';

const Home = () => {
    document.title = 'Home';

    return (
        <div>
            <Header />
            <HeaderMain />
            <ProjectSection />
            <MyResume />
            <BlogSection />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;