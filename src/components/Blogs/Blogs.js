import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './Blogs.css';
import LaunchIcon from '@mui/icons-material/Launch';
import blogPic1 from '../../images/javaScript.png';
import blogPic2 from '../../images/front-end-developer.jpg';
import blogPic3 from '../../images/developer.png';

const Blogs = () => {
    document.title = 'Blogs';

    return (
        <div>
            <Navbar />
            <div>
                <h2>My blogs (not published yet)</h2>
                <div>

                    {/* 1st Blog */}
                    <div style={{ width: "18rem", backgroundColor: 'rgba(23, 42, 69, 0.9)' }}>
                        <img src={blogPic1} alt="..." />
                        <div>
                            <h5>All you need to know about JavaScript</h5>
                            <p>In this blog, I'll be discussing about JavaScript knowledge that is required to become a front-end developer</p>
                        </div>
                        <div>
                            <div>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <button><LaunchIcon /> Read More</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 2nd Blog */}
                    <div style={{ width: "18rem", backgroundColor: 'rgba(23, 42, 69, 0.9)' }}>
                        <img src={blogPic2} alt="..." />
                        <div>
                            <h5>5 things you need to know to become a front-end developer</h5>
                            <p>I have tried to simplify the technological know-how that is required to start as a React developer</p>
                        </div>
                        <div>
                            <div>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <button><LaunchIcon /> Read More</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 3rd Blog */}
                    <div style={{ width: "18rem", backgroundColor: 'rgba(23, 42, 69, 0.9)' }}>
                        <img src={blogPic3} alt="..." />
                        <div>
                            <h5>My journey to become a developer</h5>
                            <p>In this blog, I tried to explain to people that educational background doesn't matter to learn anything new. The 'Will to Act' does</p>
                        </div>
                        <div>
                            <div>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <button><LaunchIcon /> Read More</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Blogs Ended */}
                </div>
            </div>
        </div>
    );
};

export default Blogs;