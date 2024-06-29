import React from 'react';
import { Link } from 'react-router-dom';


function Navbar({Toggle}) {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top">
      <div className="container-fluid m-2">
        <div className='m-2'>
            <i className='bi bi-justify left me-2 fs-5' onClick={Toggle}></i>
            <span className='brandName fs-5'>SCHOOL-Name</span>
        </div>

        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <form className="d-flex mx-auto my-2 my-md-0 position-relative">
            <div className="input-group">
              <span className="input-group-text bg-white border-1">
                <i className="bi bi-search"></i>
              </span>
              <input className="form-control border-start-0 search-input" type="search" placeholder="Search" aria-label="Search" />
            </div>
          </form>
        

          <div className="d-flex align-items-center ms-3">
            <i className='bi bi-chat-right-text-fill fs-5 ms-3'></i>
            <i className='bi bi-bell-fill fs-5 ms-4'></i>
            <div class="dropdown">
            <button className="new-app-btn ms-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              + New Application
            </button>
            <ul class="dropdown-menu">
              <li><Link to="/Newapp" class="dropdown-item" href="#">Student</Link></li>
              <li><Link to="/Newfaculty" class="dropdown-item" href="#">Faculty</Link></li>
            </ul>

            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;