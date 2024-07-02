import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar p-2 shadow p-3 bg-light">
      <div className="list-group list-group-flush">
        <NavLink exact to="/dashboard" className="list-group-item list-group-item-action py-2 border-0" activeClassName="active">
          <i className="bi bi-grid fs-5 me-2"></i>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/" className="list-group-item list-group-item-action border-0" activeClassName="active">
          <i className="bi bi-clipboard-data-fill fs-5 me-2"></i>
          <span>Admission</span>
        </NavLink>
        <NavLink to="/Facultyprofile" className="list-group-item list-group-item-action border-0" activeClassName="active">
          <i className="bi bi-file-text-fill fs-5 me-2"></i>
          <span>Faculty</span>
        </NavLink>
        <NavLink to="/academics" className="list-group-item list-group-item-action border-0" activeClassName="active">
          <i className="bi bi-people-fill fs-5 me-2"></i>
          <span>Academics</span>
        </NavLink>
        <NavLink to="/finance" className="list-group-item list-group-item-action border-0" activeClassName="active">
          <i className="bi bi-bank2 fs-5 me-2"></i>
          <span>Finance</span>
        </NavLink>
        <NavLink to="/assets" className="list-group-item list-group-item-action border-0" activeClassName="active">
          <i className="bi bi-database-fill-gear fs-5 me-2"></i>
          <span>Assets</span>
        </NavLink>
        <NavLink to="/calendar" className="list-group-item list-group-item-action border-0" activeClassName="active">
          <i className="bi bi-calendar-week-fill fs-5 me-2"></i>
          <span>Calendar</span>
        </NavLink>
        <NavLink to="/settings" className="list-group-item list-group-item-action mb-5" activeClassName="active">
          <i className="bi bi-gear-fill fs-5 me-2"></i>
          <span>Settings</span>
        </NavLink>
        <NavLink to="/signout" className="list-group-item list-group-item-action border-0" activeClassName="active">
          <i className="bi bi-box-arrow-right fs-5 me-2"></i>
          <span>Signout</span>
        </NavLink>
        <NavLink to="/help" className="list-group-item list-group-item-action border-0" activeClassName="active">
          <i className="bi bi-question-circle-fill fs-5 me-2"></i>
          <span>Help</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar