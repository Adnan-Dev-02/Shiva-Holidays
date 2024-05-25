import React, { useState } from 'react';
import Footer from './Footer'


import chardham2 from './images/chardham2.jpg'
import chardham3 from './images/chardham3.jpg'
import chardham4 from './images/chardham4.jpg'

const Contact = () => {

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
            <h1 className='mb-0'>Contact Us</h1>

          </div>
        </div>
      </div>

      <div className='row container-fluid m-0 w-100 p-5'>
        <div className="p-lg-5">
          <h2 className='mb-4'>Get in touch</h2>
          <div className='mb-2'>
            <i class="fa-solid fa-phone text-primary me-2"></i>
            <p className='d-inline'>+91 73793 67831</p>
          </div>
          <div className='mb-2'>
            <i class="fa-solid fa-envelope me-2 text-danger"></i>
            <p className='d-inline'>shivaholidays89@gmail.com</p>
          </div>
          <div className='mb-4'>
            <i class="fa-solid fa-location-dot me-2 text-success"></i>
            <p className='d-inline'>Vill - Broad Heights Cottage, Manali, Gadherni, Himachal Pradesh - 175131</p>
          </div>

          <h2 className='mt-5 mb-4'>Lets get social</h2>
          <div className='mb-5'>
            <a href='https://www.facebook.com/profile.php?id=61558528687781&mibextid=kFxxJD'>
              <i class="me-4 fs-4 fa-brands fa-square-facebook text-primary"></i>
            </a>
            <a href='https://www.instagram.com/shiva_holidays_official_?igsh=MTZnYWU1eG1za2Jq'>
              <i class="me-4 fs-4 fa-brands fa-instagram text-danger"></i>
            </a>
            <a href='https://wa.me/message/JM5VTN6W4H6OD1'>
              <i class="me-4 fs-4 fa-brands fa-whatsapp text-success"></i>
            </a>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Contact