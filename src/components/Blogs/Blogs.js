import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Shared/Navbar/Navbar';
import './Blogs.css';
import blogPic1 from '../../images/javaScript.png';
import blogPic2 from '../../images/front-end-developer.jpg';
import blogPic3 from '../../images/developer.png';

const Blogs = () => {
    document.title = 'Blogs';

    return (
        <div>
            <Navbar />
            <div className='container'>
                <h2 className='pt-5 text-center'>My blogs (not published yet)</h2>
                <div className='d-flex justify-content-center'>
                    <div className='row'>

                        {/* 1st Blog */}
                        <div className="card m-3 blog-card text-white blogCardStyle" style={{ width: "18rem", backgroundColor: 'rgba(23, 42, 69, 0.9)' }}>
                            <img src={blogPic1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">All you need to know about JavaScript</h5>
                                <p className="card-text">In this blog, I'll be discussing about JavaScript knowledge that is required to become a front-end developer</p>
                            </div>
                            <div className='card-footer'>
                                <div>
                                    <a href="http://" target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-sm btn-outline-warning'><FontAwesomeIcon icon={faExternalLinkAlt} /> Read More</button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 2nd Blog */}
                        <div className="card m-3 blog-card text-white blogCardStyle" style={{ width: "18rem", backgroundColor: 'rgba(23, 42, 69, 0.9)' }}>
                            <img src={blogPic2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">5 things you need to know to become a front-end developer</h5>
                                <p className="card-text">I have tried to simplify the technological know-how that is required to start as a React developer</p>
                            </div>
                            <div className='card-footer'>
                                <div>
                                    <a href="http://" target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-sm btn-outline-warning'><FontAwesomeIcon icon={faExternalLinkAlt} /> Read More</button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 3rd Blog */}
                        <div className="card m-3 blog-card text-white blogCardStyle" style={{ width: "18rem", backgroundColor: 'rgba(23, 42, 69, 0.9)' }}>
                            <img src={blogPic3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">My journey to become a developer</h5>
                                <p className="card-text">In this blog, I tried to explain to people that educational background doesn't matter to learn anything new. The 'Will to Act' does</p>
                            </div>
                            <div className='card-footer'>
                                <div>
                                    <a href="http://" target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-sm btn-outline-warning'><FontAwesomeIcon icon={faExternalLinkAlt} /> Read More</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Blogs Ended */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;