import React from 'react'

import Logo from './images/logo.png';
const Footer = () => {
    return (
        <footer className='p-4 p-lg-5 bg-dark text-white row container-fluid w-100 m-0'>
            <div className="col-sm-4 p-3">
                <div className=' d-flex align-items-center'>
                    <img src={Logo} alt="" height="30px" />
                    <h5 className="d-inline m-1">Shiva Tours Group</h5>
                </div>
                <div className='mt-3'>
                    <small className='text-secondary '>Shiva Tours Group offers travel services across India, celebrating the spirit of adventure and cultural exploration.</small>
                </div>
            </div>
            <div className="col-sm-4 p-3">
                <h5 className='mb-4'>Contact Us</h5>
                <p className='text-secondary mb-1'>Location</p>
                <p>Vill - Broad Heights Cottage, Manali, Gadherni, Himachal Pradesh - 175131</p>
                <p className='text-secondary mb-1'>Email</p>
                <a href='mailto:shivaholidays89@gmail.com' className='text-decoration-none text-white '>shivaholidays89@gmail.com</a>
                <p className='text-secondary mb-1 mt-3'>Phone</p>
                <a href="tel:7379367831" className='mb-0 text-decoration-none text-white'>+91 73793 67831</a>
            </div>
            <div className="col-sm-4 p-3">
                <h5 className='mb-4'>Get Social</h5>
                <a href='https://www.facebook.com/profile.php?id=61558528687781&mibextid=kFxxJD'>
                    <i class="me-4 fs-4 fa-brands fa-square-facebook text-light"></i>
                </a>
                <a href='https://www.instagram.com/shiva_holidays_official_?igsh=MTZnYWU1eG1za2Jq'>
                    <i class="me-4 fs-4 fa-brands fa-instagram text-light"></i>
                </a>
                <a href='https://wa.me/message/JM5VTN6W4H6OD1'>
                    <i class="me-4 fs-4 fa-brands fa-whatsapp text-light"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer