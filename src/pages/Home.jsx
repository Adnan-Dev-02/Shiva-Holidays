import React from 'react'
import chardham from './images/chardham.jpg'
import chardham2 from './images/chardham2.jpg'
import chardham1 from './images/chardham1.jpg'
import chardham3 from './images/chardham3.jpg'
import dodham from './images/2dham.jpg'
import ekdham from './images/ekdham.jpg'
import goa from './images/goa.jpg'
import shimla from './images/shimla.jpg'
import kullumanali from './images/kullumanali.jpg'
import Footer from './Footer'

function handleFormSubmit(event) {
  event.preventDefault();

  const phoneNumber = event.target.elements.phone.value;
  const guests = encodeURIComponent(event.target.elements.guests.value); // Encode special characters
  const date = encodeURIComponent(event.target.elements.date.value); // Encode special characters
  const location = encodeURIComponent(event.target.elements.location.value); // Encode special characters

  const whatsappUrl = `https://wa.me/7379367831?text=Date: ${date}%0AGuests: ${guests}%0ALocation: ${location}%0AMobile Number: ${phoneNumber}`;

  window.open(whatsappUrl, '_blank'); // Open link in new tab
}

function handleEnquirySubmit(event) {
  event.preventDefault();

  const phoneNumber = event.target.elements.phone.value;
  const guests = encodeURIComponent(event.target.elements.guests.value); // Encode special characters
  const date = encodeURIComponent(event.target.elements.date.value); // Encode special characters
  const location = encodeURIComponent(event.target.elements.location.value); // Encode special characters
  const name = encodeURIComponent(event.target.elements.name.value); // Encode special characters
  const email = encodeURIComponent(event.target.elements.email.value); // Encode special characters
  const address = encodeURIComponent(event.target.elements.address.value); // Encode special characters

  const whatsappUrl = `https://wa.me/7379367831?text=Date: ${date}%0AGuests: ${guests}%0ALocation: ${location}%0AMobile Number: ${phoneNumber}%0AName: ${name}%0AEmail: ${email}%0AAddress: ${address}`;

  window.open(whatsappUrl, '_blank'); // Open link in new tab
}

const Home = () => {
  return (
    <>
      <header id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner carousel-inner-home">
          <div class="carousel-item active">
            <img src={chardham1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={chardham2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={chardham3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={chardham} class="d-block w-100" alt="..." />
          </div>
          <div className="heading p-3">
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
      <form className="p-5 scenic" onSubmit={handleFormSubmit}>
        <p className='fs-4 text-success'>Scenic Marvels</p>
        <p className='fs-1'>
          Uncover Captivating Destinations
        </p>
        <p>Shiva Tours Group is ready and waiting for your unforgettable experiences.</p>
        <div className='bg-white my-4 p-4 shadow rounded'>
          <i class="fa-solid fa-mountain-sun text-danger d-inline me-2"></i>
          <h5 className='d-inline-block mb-2'>Holidays</h5>
          {/* <input type="text" className='border-0 w-100 mb-3' placeholder='where are you going' required name='location' /> */}
          <select name="location" id="" className='border-0 w-100 mb-3 text-secondary' required>

            <option value="Chardham">Chardham</option>
            <option value="Do Dham">Do dham</option>
            <option value="Ek Dham">Ek dham</option>
            <option value="Kullu Manali">Kullu Manali</option>
            <option value="Shimla">Shimla</option>
            <option value="Goa">Goa</option>
          </select> 

          <i class="fa-regular fa-calendar-days text-danger d-inline me-2"></i>
          <h5 className='d-inline-block mb-2'>Dates</h5>
          <input type="date" className='border-0 w-100 text-secondary text-uppercase mb-3' required name='date' />

          <i class="fa-solid fa-user text-danger d-inline me-2"></i>
          <h5 className='d-inline-block mb-2'>Guests</h5>
          <input type="number" className='border-0 w-100 mb-3' placeholder='Number of persons' required name='guests' />

          <i class="fa-solid fa-phone text-danger d-inline me-2"></i>
          <h5 className='d-inline-block mb-2'>Mobile Number</h5>
          <input type="number" className='border-0 w-100 mb-3' placeholder='Mobile Number' required name='phone' />

          {/* <Link className="w-100 h-100 text-decoration-none text-white" to="/Tours"> */}
          <button className='btn btn-danger w-100' type='submit' >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          {/* </Link> */}
        </div>
      </form>
      <div className="p-3 p-lg-5">
        <h2 className='mb-4'>Popular Destinations</h2>
        <div className="d-flex align-items-center justify-content-around row container-fluid m-0 w-100 gap-2">
          <div class="round col-sm-2 p-0 text-center">
            <img src={chardham} alt="" className='img-fluid' />
            <p className='text-black text-center mt-2'>Chardham</p>
          </div>
          <div class="round col-sm-2 p-0 text-center">
            <img src={ekdham} alt="" className="img-fluid" />
            <p className='text-black text-center mt-2'>Ek Dham</p>
          </div>
          <div class="round col-sm-2 p-0 text-center">
            <img src={dodham} alt="" className="img-fluid" />
            <p className='text-black text-center mt-2'>Do Dham</p>
          </div>
          <div class="round col-sm-2 p-0 text-center">
            <img src={kullumanali} alt="" className="img-fluid" />
            <p className='text-black text-center mt-2'>Kullu Manali </p>
          </div>
          <div class="round col-sm-2 p-0 text-center">
            <img src={shimla} alt="" className="img-fluid" />
            <p className='text-black text-center mt-2'>Shimla </p>
          </div>
          <div class="round col-sm-2 p-0 text-center">
            <img src={goa} alt="" className="img-fluid" />
            <p className='text-black text-center mt-2'>Goa </p>
          </div>
        </div>
      </div>

      <div className="row p-3 p-lg-5 justify-content-around container-fluid m-0  w-100">
        <h2 className='mb-3 p-0'>Discover Weekly</h2>
        <div className="col-sm-3 p-2">
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
        <div className="col-sm-3 p-2">
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
        <div className="col-sm-3 p-2">
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
        <div className="col-sm-3 p-2">
          <div class="card shadow" style={{}}>
            <img class="card-img-top" alt="..." src={goa} />
            <div class="card-body">
              <h5 class="card-title">Goa to Delhi</h5>
              <p className='mt-3 mb-1'>4 nights/5 days @ ₹10999</p>
              <p className='mb-3 mb-1'>6 nights/7days package rate @ ₹12000</p>
            </div>
          </div>
        </div>
      </div>

      <div className='p-3 p-lg-5'>
        <h2 className='mb-3'>Our Location</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4014.4577933168216!2d77.18618452857694!3d32.21115057170117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDEyJzM5LjkiTiA3N8KwMTEnMDkuOSJF!5e0!3m2!1sen!2sin!4v1717179817185!5m2!1sen!2sin" height="450" allowfullscreen="" className='w-100 shadow rounded' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="p-3 p-lg-5">
        <h2 className='text-center'>What our clients say</h2>
        <div className="row container-fluid m-0 p-3 d-flex justify-content-around">
          <div className="col-sm-5 p-3 shadow rounded m-1">
            <h5>Rajiv's</h5>
            <p>Manali tour was breathtaking! The sights were surreal, and the service impeccable. A delightful blend of culture and nature. Highly recommended for an authentic and serene experience.</p>
            <i class="fa-solid fa-star text-warning d-inline"></i>
            <i class="fa-solid fa-star text-warning d-inline"></i>
            <i class="fa-solid fa-star text-warning d-inline"></i>
            <i class="fa-solid fa-star text-warning d-inline"></i>
            <i class="fa-solid fa-star text-warning d-inline"></i>
          </div>
          <div className="col-sm-5 p-3 shadow rounded m-1">
            <h5>Priya</h5>
            <p>Dalhousie tour was a serene escape! The tranquility of the hills and impeccable arrangements made it an unforgettable journey. The perfect retreat for a peaceful vacation.</p>
            <i class="fa-solid fa-star text-warning d-inline"></i>
            <i class="fa-solid fa-star text-warning d-inline"></i>
            <i class="fa-solid fa-star text-warning d-inline"></i>
            <i class="fa-solid fa-star text-warning d-inline"></i>
            <i class="fa-solid fa-star text-warning d-inline"></i>

          </div>
        </div>
      </div>

      <form className='p-3 p-lg-5' onSubmit={handleEnquirySubmit}>
        <h2 className='text-center'>Enquiry Form</h2>
        <p className='mb-1'>Name *</p>
        <input type="text" name="name" id="" placeholder='Your Name' className='w-100 p-2 mb-3' required />
        <p className='mb-1'>Email *</p>
        <input type="email" name="email" id="" placeholder='example@gmail.com' className='w-100 p-2 mb-3' required />
        <p className='mb-1'>Phone *</p>
        <input type="number" name="phone" id="" placeholder='12345 67890' className='w-100 p-2 mb-3' required />
        <p className='mb-1'>Address *</p>
        <input type="text" name="address" id="" placeholder='Your Address' className='w-100 p-2 mb-3' required />
        <p className='mb-1'>Check in *</p>
        <input type="date" name="date" id="" placeholder='Your Address' className='w-100 p-2 mb-3' required />
        <p className='mb-1'>Guests *</p>
        <input type="number" name="guests" id="" placeholder='2' className='w-100 p-2 mb-3' required />

        <p className='mb-1'>Package *</p>
        <select name="location" id="" className='w-100 p-2 mb-3 text-secondary' required>

          <option value="Chardham">Chardham</option>
          <option value="Do Dham">Do dham</option>
          <option value="Ek Dham">Ek dham</option>
          <option value="Kullu Manali">Kullu Manali</option>
          <option value="Shimla">Shimla</option>
          <option value="Goa">Goa</option>
        </select>
        <button className='btn btn-success w-100 mt-2' type='submit' >Submit</button>
      </form>
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