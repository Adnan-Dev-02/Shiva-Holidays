import React from 'react'
import chardham from './images/chardham1.jpg'
import chardham2 from './images/chardham2.jpg'
import chardham3 from './images/chardham3.jpg'
import goa from './images/goa.jpg'
import shimla from './images/shimla.jpg'
import chardham4 from './images/chardham4.jpg'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <header id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner carousel-inner-home">
          <div class="carousel-item active">
            <img src={chardham} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={chardham2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={chardham3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={chardham4} class="d-block w-100" alt="..." />
          </div>
          <div className="heading">
            <h1 className='mb-0 fs-1'>Welcome to Shiva Tours Group</h1>

          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </header>
      <div className="p-5 scenic">
        <p className='fs-4 text-success'>Scenic Marvels</p>
        <p className='fs-1'>
          Uncover Captivating Destinations
        </p>
        <p>Shiva Tours Group is ready and waiting for your unforgettable experiences.</p>
        <div className='bg-white my-4 p-4 shadow rounded'>
          <i class="fa-solid fa-mountain-sun text-danger d-inline me-2"></i>
          <h5 className='d-inline-block mb-2'>Holidays</h5>
          <input type="text" className='border-0 w-100 mb-3' placeholder='where are you going' />

          <i class="fa-regular fa-calendar-days text-danger d-inline me-2"></i>
          <h5 className='d-inline-block mb-2'>Dates</h5>
          <input type="date" className='border-0 w-100 text-secondary text-uppercase mb-3' />

          <i class="fa-solid fa-user text-danger d-inline me-2"></i>
          <h5 className='d-inline-block mb-2'>Guests</h5>
          <input type="number" className='border-0 w-100 mb-3' placeholder='Number of persons' />

          <Link className="w-100 h-100 text-decoration-none text-white" to="/Tours">
            <button className='btn btn-danger w-100'  >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </Link>
        </div>
      </div>
      <div className="p-3 p-lg-5">
        <h2 className='mb-3'>Popular Destinations</h2>
        <div className="d-flex align-items-center justify-content-around row container-fluid m-0 w-100 gap-2">
          <div class="round col-sm-2 p-0">
            <img src={chardham} alt="" className='img-fluid' />
          </div>
          <div class="round col-sm-2 p-0">
            <img src={chardham2} alt="" className="img-fluid" />
          </div>
          <div class="round col-sm-2 p-0">
            <img src={chardham3} alt="" className="img-fluid" />
          </div>
          <div class="round col-sm-2 p-0">
            <img src={chardham4} alt="" className="img-fluid" />
          </div>
          <div class="round col-sm-2 p-0">
            <img src={shimla} alt="" className="img-fluid" />
          </div>
          <div class="round col-sm-2 p-0">
            <img src={goa} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className=" bg-danger text-white row container-fluid m-0 w-100">
        <div className="col-sm-4 p-3 p-lg-5">
          <i class="fa-solid fa-earth-asia fs-1"></i>
          <h4 className='d-inline ms-3'>Variety of destinations</h4>
          <p className='my-2 text-white-50'>Explore Unique Destinations across India</p>
        </div>
        <div className="col-sm-4 p-3 p-lg-5">
          <i class="fa-solid fa-hand-holding-dollar fs-1"></i>
          <h4 className='d-inline ms-3'>Best price guarantee</h4>
          <p className='my-2 text-white-50'>Assured Best Prices for Unmatched Travel Value</p>
        </div>
        <div className="col-sm-4 p-3 p-lg-5">
          <i class="fa-solid fa-headset fs-1"></i>
          <h4 className='d-inline ms-3'>Excellent Support</h4>
          <p className='my-2 text-white-50'>Exceptional Support Ensuring Seamless Travel Experience</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home