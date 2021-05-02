import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Shared/Navbar/Navbar';

const Projects = () => {
    return (
        <div>
            <Navbar />
            <h2 className='p-5 text-center'>My Projects</h2>
            <div className='container'>

                {/* 1st Project */}
                <div className='d-flex mb-4 border p-3'>
                    <div className='col-md-6'>
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://i.ibb.co/syJZXXR/complete12.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.ibb.co/wsMPm0y/complete10.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.ibb.co/LxSZYjN/complete11.png" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-6 ms-3'>
                        <h2>City Wheels Auto Shop</h2>
                        <h6 className='fst-italic'>An automotive service oriented website (MERN stack)</h6>
                        <ul>
                            <li>
                                User can opt for a service from the homepage but he/she needs to login first. Applied Private Route (also known as Protected Route/ Authenticated Route) to restrict convenient access. Implemented Google sign in method using Firebase Authentication.
                            </li>
                            <li>
                                The data displayed in our homepage is fetched from MongoDB but for some parts we used static data. We used route parameter to fetch data dynamically from MongoDB and displayed accordingly.
                            </li>
                            <li>
                                User can book a service, can pay with card (integrated payment gateway method specifically Stripe Payment). User can view his/her orders (along with status) and provide reviews which is shown on the review section of the homepage dynamically.
                            </li>
                            <li>
                                Exhausted CRUD operations on multiple occasions while building the website. Implemented Admin/User differentiation. Admin can add/remove/status of different services and changes are reflected immediately on the website. Status updates are immediately reflected on User Panel. An admin is capable of adding another user as an admin.
                            </li>
                            <li>
                                In addition, we used plain bootstrap to make the website device responsive. Furthermore, we deployed our site on Firebase which can be accessed through the above mentioned link to experience the website.
                            </li>
                        </ul>
                        <h6>Technology</h6>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>React.js</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>React Router</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Stripe.js</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>MongoDB</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Firebase Authentication</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Context API</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Bootstrap 5.0</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Node.js</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Express.js</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>React Hooks Form</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Axios</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>CRUD operations</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Heroku</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>JavaScript</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>CSS3</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>JSX</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Font Awesome</span>
                        <ul className='list-inline ms-2 mt-2'>
                            <li className='list-inline-item'>
                                <div>
                                    <a href='https://github.com/MK-Khan123/complete-website-client' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-sm btn-info'><FontAwesomeIcon icon={faGithub} /> GitHub</button>
                                    </a>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <div>
                                    <a href='https://complete-website-assignm-474e8.firebaseapp.com/' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-sm btn-warning'><FontAwesomeIcon icon={faExternalLinkAlt} /> Live Site</button>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 2nd Project */}
                <div className="d-flex mb-4 border p-3">
                    <div className='col-md-6'>
                        <div id="carouselExampleControls1" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://i.ibb.co/XD81z21/fullstack1.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.ibb.co/Sf2bSR4/fullstack2.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.ibb.co/98drzWd/fullstack6.png" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-6 ms-3'>
                        <h2>Grocery House</h2>
                        <h6 className='fst-italic'>A grocery shop website (MERN Stack)</h6>
                        <ul>
                            <li>
                                User can buy grocery items from the homepage but he/she needs to login first. Applied Private Route (also known as Protected Route/ Authenticated Route) to restrict convenient access. Implemented Google and Facebook sign in method using Firebase Authentication.
                            </li>
                            <li>
                                On the process of buying, a checkout page is loaded by using route parameter to fetch data dynamically from MongoDB and displayed data accordingly. User’s order specific details are stored on MongoDB.
                            </li>
                            <li>
                                We used create, read, and delete of CRUD operations in this project. Unlike using fakeData, this time data displayed in our homepage is fetched from MongoDB. We slightly used React Authentication along with our previous knowledge of React Routing.
                            </li>
                            <li>
                                Admin can add/remove products and when products are added/removed, changes are reflected immediately on the homepage. User can view his/her specific order summary by clicking on 'Orders' tab.
                            </li>
                            <li>
                                In addition, we used plain bootstrap to make the website device responsive. Furthermore, we deployed our site on Firebase which can be accessed through the above mentioned link to experience the website.
                            </li>
                        </ul>
                        <h6>Technology</h6>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>React.js</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>React Router</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>MongoDB</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Firebase Authentication</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Context API</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Bootstrap 5.0</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Node.js</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Express.js</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>React Hooks Form</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Axios</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>CRUD operations</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Heroku</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>JavaScript</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>CSS3</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>JSX</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Font Awesome</span>
                        <ul className='list-inline ms-2 mt-2'>
                            <li className='list-inline-item'>
                                <div>
                                    <a href='https://github.com/MK-Khan123/fullstack-assignment-client' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-sm btn-info'><FontAwesomeIcon icon={faGithub} /> GitHub</button>
                                    </a>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <div>
                                    <a href='https://fullstack-assignment.firebaseapp.com/' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-sm btn-warning'><FontAwesomeIcon icon={faExternalLinkAlt} /> Live Site</button>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 3rd Project */}
                <div className="d-flex mb-4 border p-3">
                    <div className='col-md-6'>
                        <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://i.ibb.co/949t1mD/city-transport1.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.ibb.co/LC7ppfs/city-transport4.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.ibb.co/gSzzxqk/city-transport5.png" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-6 ms-3'>
                        <h2>City Transport</h2>
                        <h6 className='fst-italic'>A website for booking different transport services</h6>
                        <ul>
                            <li>
                                User can book tickets based on their preferred ride from the homepage but he/she needs to login first. Applied Private Route (also known as Protected Route/ Authenticated Route) to restrict convenient access. Implemented Google and Facebook sign in method using Firebase Authentication. Users can also create their account (if they don’t have any) and details are stored on Firebase.
                            </li>
                            <li>
                                When user signs in, they can select a ride and by providing ride details, they will be able to see the cost (fakeData) and pick & drop location along with a static map. We generated fakeData in JSON format and used route parameter to display data dynamically, prompted through unique interactions.
                            </li>
                            <li>
                                In addition, we used plain bootstrap to make the website device responsive. Furthermore, we deployed our site on Netlify which can be accessed through the above mentioned link to experience the website.
                            </li>
                        </ul>
                        <h6>Technology</h6>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>React.js</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>React Router</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Firebase Authentication</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Context API</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Bootstrap 5.0</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>JavaScript</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>CSS3</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>JSX</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Font Awesome</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Netlify</span>
                        <ul className='list-inline ms-2 mt-2'>
                            <li className='list-inline-item'>
                                <div>
                                    <a href='https://github.com/MK-Khan123/city-transport' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-sm btn-info'><FontAwesomeIcon icon={faGithub} /> GitHub</button>
                                    </a>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <div>
                                    <a href='https://practical-joliot-41cf3a.netlify.app/' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-sm btn-warning'><FontAwesomeIcon icon={faExternalLinkAlt} /> Live Site</button>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 4th Project */}
                <div className="d-flex mb-4 border p-3">
                    <div className='col-md-6'>
                        <div id="carouselExampleControls3" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://i.ibb.co/RCVLQPm/epl1.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.ibb.co/vJjxrtm/epl2.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.ibb.co/0FvXYn1/epl3.png" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-6 ms-3'>
                        <h2>English Premiere League Elites</h2>
                        <h6 className='fst-italic'>A website where best EPL clubs are displayed dynamically</h6>
                        <ul>
                            <li>
                                In this project, we practically applied the functional concepts of React routing.
                            </li>
                            <li>
                                We fetched our data from TheSportsDB.com and used route parameter to display data dynamically prompted through unique interaction.
                            </li>
                            <li>
                                We accessed unique data using route parameter and generated dynamic URL to load and display data.
                            </li>
                            <li>
                                In addition, we used conditional formatting and plain bootstrap inside the source code to make it more functional and device responsive.
                            </li>
                            <li>
                                Furthermore, we deployed our site on Netlify which can be accessed through the above mentioned link to experience the website.
                            </li>
                        </ul>
                        <h6>Technology</h6>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>React.js</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>React Router</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>RESTful APIs</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Bootstrap 5.0</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>JavaScript</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>CSS3</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>JSX</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Font Awesome</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Netlify</span>
                        <ul className='list-inline ms-2 mt-2'>
                            <li className='list-inline-item'>
                                <div>
                                    <a href='https://github.com/MK-Khan123/epl-elites' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-sm btn-info'><FontAwesomeIcon icon={faGithub} /> GitHub</button>
                                    </a>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <div>
                                    <a href='https://sharp-bartik-4aeef2.netlify.app/' target="_blank" rel="noopener noreferrer">
                                        <button className='btn btn-sm btn-warning'><FontAwesomeIcon icon={faExternalLinkAlt} /> Live Site</button>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* PROJECT ENDED */}
            </div>
        </div>
    );
};

export default Projects;