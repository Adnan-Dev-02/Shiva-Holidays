import React from 'react'
import dodham from './images/2dham.jpg'
import ekdham from './images/ekdham.jpg'
import chardham from './images/chardham.jpg'
import chardham2 from './images/chardham2.jpg'
import chardham3 from './images/chardham3.jpg'
import chardham4 from './images/chardham4.jpg'
import goa from './images/goa.jpg'
import shimla from './images/shimla.jpg'
import kullumanali from './images/kullumanali.jpg'
import Footer from './Footer'

const Tours = () => {
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
            <h1 className='mb-0'>Tours</h1>

          </div>
        </div>
      </div>
      <div className="p-2 p-lg-5 row justify-content-around container-fluid m-0  w-100">

        <div className="col-sm-4 p-2 p-lg-5">
          <div class="card shadow" style={{}}>
            <img class="card-img-top" alt="..." src={ekdham} />
            <div class="card-body">
              <h5 class="card-title">Ek Dham yatra package. From delhi. Haridwar. 3 night / 4 day</h5>
              <h5 className='mt-3 mb-1'>₹8599</h5>
              <strike className="d-block fs-5 mb-3">₹10000</strike>
              <p>Fix Departure Every Friday From Haridwar by tempo Traveller</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 p-2 p-lg-5">
          <div class="card shadow" style={{}}>
            <img class="card-img-top" alt="..." src={dodham} />
            <div class="card-body">
              <h5 class="card-title">Do Dham Yatra package From Delhi. Haridwar 6 night / 7 day</h5>
              <h5 className='mt-3 mb-1'>₹10000</h5>
              <strike className="d-block fs-5 mb-3">₹15000</strike>
              <p>Fix Departure Every Friday From Haridwar by tempo Traveller</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 p-2 p-lg-5">
          <div class="card shadow" style={{}}>
            <img class="card-img-top" alt="..." src={chardham} />
            <div class="card-body">
              <h5 class="card-title">Char Dham yatra package. From. Delhi. Haridwar. Rishikesh 10 night / 11 day</h5>
              <h5 className='mt-3 mb-1'>₹20999</h5>
              <strike className="d-block fs-5 mb-3">₹24999</strike>
              <p>Fix Departure Every Friday From Haridwar by tempo Traveller</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 p-2 p-lg-5">
          <div class="card shadow" style={{}}>
            <img class="card-img-top" alt="..." src={goa} />
            <div class="card-body">
              <h5 class="card-title">Goa to Delhi</h5>
              <p className='mt-3 mb-1'>4 nights/5 days @ ₹10999</p>
              <p className='mb-3 mb-1'>6 nights/7days package rate @ ₹12000</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 p-2 p-lg-5">
          <div class="card shadow" style={{}}>
            <img class="card-img-top" alt="..." src={shimla} />
            <div class="card-body">
              <h5 class="card-title">Shimla manali From. Delhi Chandigarh. 6 nights/7 days</h5>
              <h5 className='mt-3 mb-1'>₹26000</h5>
              <strike className="d-block fs-5 mb-3">₹35000</strike>
            </div>
          </div>
        </div>
        <div className="col-sm-4 p-2 p-lg-5">
          <div class="card shadow" style={{}}>
            <img class="card-img-top" alt="..." src={kullumanali} />
            <div class="card-body">
              <h5 class="card-title">Kullu & Manali From From Delhi. Chandigarh. 4 nights / 5 days and Volvo package From Delhi 4 nights/5 days</h5>

              <p className='mt-3 mb-1'>Volvo rate @ 9000</p>
              <p className='mb-3 mb-1'>Personal cab @ 10000</p>
            </div>
          </div>
        </div>




      </div>
      <Footer/>
    </>
  )
}

export default Tours