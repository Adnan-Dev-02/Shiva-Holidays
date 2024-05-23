import React from 'react'
import chardham from './images/chardham1.jpg'
import chardham2 from './images/chardham2.jpg'
import chardham3 from './images/chardham3.jpg'
import goa from './images/goa.jpg'
import shimla from './images/shimla.jpg'
import chardham4 from './images/chardham4.jpg'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
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
            <h1 className='mb-0'>Welcome to Shiva Holidays</h1>

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
      </div>
      <div className="p-3 p-lg-5">
        <h2 className='mb-3'>Popular Destinations</h2>
        <div className="d-flex align-items-center justify-content-around row container-fluid m-0 w-100 gap-2">
          <div class="round col-sm-2 p-0">
            <img src={chardham} alt="" className='img-fluid'/>
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