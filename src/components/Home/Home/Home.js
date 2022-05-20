import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import BlogSection from '../BlogSection/BlogSection';
import ContactSection from '../ContactSection/ContactSection';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import ProjectSection from '../ProjectSection/ProjectSection';
import TechnologySection from '../TechnologySection/TechnologySection';

const Home = () => {
    document.title = 'My Portfolio Website';

    return (
        <>
            <header id='home'>
                <Header />
                <HeaderMain />
            </header>

            <main>
                <ProjectSection />
                <TechnologySection />
                <BlogSection />
                <ContactSection />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Home;