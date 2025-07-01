import React from 'react';
import './Home.css';

const Home = () => {
return (
<div className="home-container">
<main className="home-hero">
<div className="hero-left">
    <p className="hero-subtitle">Hi, I am</p>
    <h1 className="hero-title">MAYANK KUNDARIYA</h1>
    <p className="hero-role">Front-end WEB Developer </p>
    <div className="hero-icons">
    <a href="#"><i className="fa-solid fa-at"></i></a>
    <a href="#"><i className="fa-brands fa-github"></i></a>
    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
    </div>
</div>
<div className="hero-right">
<img src="./assets/mayank_dtl.jpg" alt="IMAGE" />
</div>
</main>
<section className="home-footer">
<div className="footer-content">
    <h2>THOUGHT</h2>
    <p></p>
    <button className="read-more">READ MORE</button>
</div>
</section>
</div>
);
};

export default Home;