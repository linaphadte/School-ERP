import React from 'react';

function Navbar({Toggle}) {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top">
      <div className="container-fluid m-2">
        <div className='m-2'>
            <i className='bi bi-justify left me-2 fs-5' onClick={Toggle}></i>
            <span className='brandName fs-5'>SCHOOL-NAME</span>
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
              <input className="form-control border-start-3" type="search" placeholder="Search" aria-label="Search" />
            </div>
          </form>
        

          <div className="ms-3">
            <i className='bi bi-chat-right-text-fill fs-5 ms-3'></i>
            <i className='bi bi-bell-fill fs-5 ms-3'></i>
            <button className="new-app-btn ms-3">+ New Application</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;