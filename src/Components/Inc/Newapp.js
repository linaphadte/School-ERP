import React from 'react';
import profileimg from '../Images/profileimg.png'

function Newapp() {
    const handleSave = () => {
      // Logic to handle saving the application
      alert('Application saved!');
    };
  
    const handleDiscard = () => {
      // Logic to handle discarding the application
      alert('Application discarded!');
    };
  
    return (
        <div className="container mt-2">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Create New Application</h2>
          <div>
            <button type="button" className="btn btn-success me-2" onClick={handleSave}>Save</button>
            <button type="button" className="btn btn-danger" onClick={handleDiscard}>Discard</button>
          </div>
        </div>
  
        <div className="row">
          <div className="col-md-8">
            <form className="row g-3">
            <span >Enter Personal details</span>
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">FIRST NAME</label>
                <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label">MIDDLE NAME</label>
                <input type="password" className="form-control" id="inputPassword4"/>
            </div>
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">LAST NAME</label>
                <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label">EMAIL</label>
                <input type="password" className="form-control" id="inputPassword4"/>
            </div>
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">DATE OF BIRTH</label>
                <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label">AGE</label>
                <input type="password" className="form-control" id="inputPassword4"/>
            </div>
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">ADDRESS</label>
                <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label">STREET NAME</label>
                <input type="password" className="form-control" id="inputPassword4"/>
            </div>
            
            <div className="col-md-6">
                <label for="inputCity" className="form-label">CITY</label>
                <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="col-md-4">
                <label for="inputState" className="form-label">STATE</label>
                <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div className="col-md-2">
                <label for="inputZip" className="form-label">ZIP</label>
                <input type="text" className="form-control" id="inputZip"/>
            </div>
            
            </form>

          </div>
  
          <div className="col-md-4 d-grid gap-2">
            <div className="card text-center">
            <img src={profileimg} className="rounded-circle" alt="..."/>
            <button className="profile-btn mx-auto">Upload Photograph</button>
              <div className="card-body d-grid gap-2">
                <h5 className="card-title">Upload Documents</h5>
                <div className="d-grid gap-2 d-md-block">
                    <button className="profile-btn col-md-8">Upload Aadhar</button>
                    <i className='bi bi-check2-circle fs-5 me-2'></i>
                </div>
                <div className="d-grid gap-2 d-md-block">
                    <button className="profile-btn col-md-8">Upload Marksheet</button>
                    <i className='bi bi-check2-circle fs-5 me-2'></i>
                </div>
                <div className="d-grid gap-2 d-md-block">
                    <button className="profile-btn col-md-8 text-nowrap">Upload Medical Certificate</button>
                    <i className='bi bi-check2-circle fs-5 me-2'></i>
                </div>
                <div className="d-grid gap-2 d-md-block">
                    <button className="profile-btn col-md-8 text-nowrap">Upload BPL Certificate</button>
                    <i className='bi bi-check2-circle fs-5 me-2'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Newapp;
