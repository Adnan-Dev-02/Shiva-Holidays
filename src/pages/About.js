import React from 'react';
import Footer from './Footer';

import chardham2 from './images/chardham2.jpg'
import chardham3 from './images/chardham3.jpg'
import chardham4 from './images/chardham4.jpg'

function About() {
  return (
    <>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner-tours">
          <div class="carousel-item active">
            <img src={chardham2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={chardham3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={chardham4} class="d-block w-100" alt="..." />
          </div>
          <div className="heading">
            <h1 className='mb-0'>About Us</h1>

          </div>
        </div>
      </div>
      <div className="row p-3 p-lg-5 container-fluid m-0">
        <p>Shiva Tours Group has years of experience pioneering tourism in inspiring destinations across South and Southeast Asia. Our expertise, insights, and personal experiences reflect the tailor-made itineraries we create for our valued clients. We take pride in crafting AMAZING ADVENTURE journeys that cater to every need and requirement.</p>
        <p>Our journey begins in South Asia, a region that invokes mysticism and enchantment. From the ancient towns of Kathmandu to the spiritual monasteries in Thimphu, we offer travelers an overwhelming sense of excitement. As Oscar Wilde once said, “I never travel without my diary. One should always have something sensational to read in the train.” Let Shiva Tours Group take you on a magnificent journey you’ll never forget.</p>
        <p>Conservation and eco-tourism are integral to our values. We support projects that foster a sustainable business model. Our goal is to offer an authentic experience to every traveler, regardless of their background or origin. With quality, value, and trust at the core of our ethos, Shiva Tours Group provides cultural and trekking experiences that leave lasting memories.</p>
      </div>
      <Footer />
    </>
  )
}

export default About