// Layout.js
import { Outlet, Link } from "react-router-dom";
import Logo from './images/logo.png';
import '../App.css'

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg border-body sticky-top" data-bs-theme="dark">

        <div class="container-fluid">
          <div class="col-sm-6 justify-content justify-content-center d-flex align-items-center">
            <img src={Logo} alt="" height="30px" />
            <h1 class="navbar-brand d-inline m-1">Shiva Tours Group</h1>
          </div>
          <div class="col-sm-6 text-center">

            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item ">
                  <Link class="nav-link" to="/Home">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Tours">Tours</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/About">About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
