import React, { useState } from 'react';
import profileimg from '../Images/profileimg.png'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Newfaculty() {
  const [firstname, setFirstname]= useState("")
  const [lastname, setLastname]= useState("")
  const [email, setEmail]= useState("")
  const [subject, setSubject]= useState("")
  
  const history= useNavigate();


    const header={"Access-Control-Allow-Origin":"*"};

    const handleSave = (e) => {
      e.preventDefault();
      axios.post('https://667d5827297972455f64b4d3.mockapi.io/New-faculty',{
        firstname: firstname,
        lastname:lastname,
        email:email,
        subject:subject,
        header,
      })

      .then(()=>{
        history("/Facultyprofile");
      });
     
    };
  
  
    return (
        <div className="container mt-2">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Add New Faculty</h2>
          <div>
            <button type="button" className="btn btn-success me-2" onClick={handleSave}>Save</button>
            <button type="button" className="btn btn-danger">Discard</button>
          </div>
        </div>
  
        <div className="row">
          <div className="col-md-8">
            <form className="formfont row g-3">
            <span ></span>
            <div className="col-md-6">
                <label for="firstname" className="form-label">FIRST NAME</label>
                <input type="text" className="form-control" id="firstname"
                onChange={(e)=>setFirstname(e.target.value)}
                />
            </div>
            <div className="col-md-6">
                <label for="lastname" className="form-label">LAST NAME</label>
                <input type="text" className="form-control" id="lastname"
                onChange={(e)=>setLastname(e.target.value)}
                />
            </div>
            <div className="col-md-6">
                <label for="contact" className="form-label">CONTACT INFO</label>
                <input type="tel" className="form-control" id="contact"/>
            </div>
            <div className="col-md-6">
                <label for="email" className="form-label">EMAIL</label>
                <input type="email" className="form-control" id="email"
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className="col-md-6">
                <label for="address" className="form-label">ADDRESS</label>
                <input type="text" className="form-control" id="address"/>
            </div>
            <div className="col-md-6">
                <label for="streetname" className="form-label">STREET NAME</label>
                <input type="text" className="form-control" id="streetname"/>
            </div>
            
            <div className="col-md-6">
                <label for="city" className="form-label">CITY</label>
                <input type="text" className="form-control" id="city"/>
            </div>
            <div className="col-md-4">
                <label for="state" className="form-label">STATE</label>
                <input type="text" className="form-control" id="state"/>
            </div>
            <div className="col-md-2">
                <label for="zip" className="form-label">ZIP</label>
                <input type="text" className="form-control" id="zip"/>
            </div>
            <div className="subjects col-md-12">
            <label for="subject" class="form-label">Subject</label>
            <select id="subject" class="form-select" onChange={(e)=>setSubject(e.target.value)}>
              <option selected>Choose Subject</option>
              <option>Maths</option>
              <option>Science</option>
              <option>English</option>
            </select>
            </div>
            
            </form>

          </div>
  
          <div className="col-md-4 d-flex flex-column align-items-end">
            <div className="card text-center bg-light border-primary shadow p-2">
            <img src={profileimg} className="rounded-circle" alt="..."/>
            <button className="profile-btn mx-auto">Upload Photograph</button>
              <div className="card-body d-grid gap-2">
                <h5 className="card-title">Upload Documents</h5>
                <div className="d-grid gap-2 d-md-block">
                    <button className="profile-btn col-md-8">Upload Educational History</button>
                    <i className='bi bi-check2-circle fs-5 me-2'></i>
                </div>
                <div className="d-grid gap-2 d-md-block">
                    <button className="profile-btn col-md-8">Upload Documents</button>
                    <i className='bi bi-check2-circle fs-5 me-2'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Newfaculty;
