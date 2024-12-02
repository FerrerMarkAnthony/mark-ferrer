import React from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home-background min-vh-100">
      <div className="home container d-flex">
        <div className="d-flex flex-column gap-3 home-content">
          <h3 className="home-subtitle text-uppercase text-light ">
            Your Satisfaction, Our Priority
          </h3>
          <h1 className="home-title">FAST, RELIABLE, AND TRUSTED</h1>
          <p className="home-paragraph w-50">
            Experience the next level of efficiency and quality with our premium
            products. Designed to meet your needs and exceed expectations.
          </p>
          <div className="home-button-group">
            <Button variant="primary" className="me-2" href="/products">
              DISCOVER MORE
            </Button>
            <Button variant="secondary">GET STARTED</Button>
          </div>
        </div>
        <div className="home-image">
          <img
            src="https://shine.creativemox.com/mobicare/wp-content/uploads/sites/32/2024/10/smartphone_img.png"
            alt=""
          />
        </div>
      </div>
      <div className="highlights d-flex justify-content-center align-items-center">
        <p className="home-paragraph text-light">
          Explore our top-of-the-line products, from accessories to gadgets!
        </p>
      </div>
    </div>
  );
};

export default Home;
