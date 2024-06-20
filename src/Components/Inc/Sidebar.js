import React from 'react';


function Sidebar() {
  return (
    <div className='sidebar bg-white p-2 shadow-sm p-3'>
        <div className='list-group list-group-flush'>
            <a className='list-group-item py-2 border-0'>
            <i className='bi bi-grid fs-5 me-2'></i>
            <span>Dashboard</span>
            </a>
            <a className='list-group-item list-group-item-action border-0 active'>
            <i className='bi bi-clipboard-data-fill fs-5 me-2'></i>
            <span>Admission</span>
            </a>
            <a className='list-group-item list-group-item-action border-0'>
            <i className='bi bi-file-text-fill fs-5 me-2'></i>
            <span>Faculty</span>
            </a>
            <a className='list-group-item list-group-item-action border-0'>
            <i className='bi bi-people-fill fs-5 me-2'></i>
            <span>Academics</span>
            </a>
            <a className='list-group-item list-group-item-action border-0'>
            <i className='bi bi-bank2 fs-5 me-2'></i>
            <span>Finance</span>
            </a>
            <a className='list-group-item list-group-item-action border-0'>
            <i className='bi bi-database-fill-gear fs-5 me-2'></i>
            <span>Assets</span>
            </a>
            <a className='list-group-item list-group-item-action border-0'>
            <i className='bi bi-calendar-week-fill fs-5 me-2'></i>
            <span>Calender</span>
            </a>
            <a className='list-group-item list-group-item-action mb-5 '>
            <i className='bi bi-gear-fill fs-5 me-2 '></i>
            <span>Settings</span>
            </a>
            <a className='list-group-item list-group-item-action border-0'>
            <i className='bi bi-box-arrow-right fs-5 me-2'></i>
            <span>Signout</span>
            </a>
            <a className='list-group-item list-group-item-action border-0'>
            <i className='bi bi-question-circle-fill fs-5 me-2'></i>
            <span>Help</span>
            </a>
        </div>
      
    </div>
  )
}

export default Sidebar
