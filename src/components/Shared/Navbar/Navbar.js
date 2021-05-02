import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Mehnaz Ahmed Khan</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto align-items-center">
                        <Link className="nav-link ms-4" to="/home">Home</Link>
                        <Link className="nav-link ms-4" to="/about">About</Link>
                        <Link className="nav-link ms-4" to="/projects">Projects</Link>
                        <Link className="nav-link ms-4" to="/blogs">Blogs</Link>
                        <Link className="nav-link ms-4" to="/contact">Contact</Link>
                        <a className="ms-4 btn btn-outline-danger" target='_blank' rel="noopener noreferrer" href="https://drive.google.com/uc?export=download&id=1MTfkVtREFJNFP_wyXy2DzKuVpJYYOCFf">DOWNLOAD RESUME</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;