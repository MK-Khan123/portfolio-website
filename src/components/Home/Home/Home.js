import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import BlogSection from '../BlogSection/BlogSection';
import ContactSection from '../ContactSection/ContactSection';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import ProjectSection from '../ProjectSection/ProjectSection';
import TechnologySection from '../TechnologySection/TechnologySection';

const Home = () => {

    return (
        <section id='home'>
            <Header />
            <HeaderMain />
            <ProjectSection />
            <TechnologySection />
            <BlogSection />
            <ContactSection />
            <Footer />
        </section>
    );
};

export default Home;