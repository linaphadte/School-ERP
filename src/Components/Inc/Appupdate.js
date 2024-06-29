import React, { useState, useEffect } from 'react';
import profileimg from '../Images/profileimg.png';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



function Appupdate() {
    const [id, setId] = useState(0);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
  
    const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"))
    setFirstname(localStorage.getItem("firstname"))
    setLastname(localStorage.getItem("lastname"))
    setBirthdate(localStorage.getItem("birthdate"))
    setEmail(localStorage.getItem("email"))
    
  }, [])
  
  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://667d5827297972455f64b4d3.mockapi.io/CRUD-schoolerp/${id}`,{
      firstname: firstname,
      lastname:lastname,
      email:email,
      birthdate: birthdate,
    }
    ).then(()=>{
        navigate("/")

    })
    }
    
  
    return (
        <div className="container mt-2">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Update Form</h2>
          <div>
            <button type="button" className="btn btn-success me-2" onClick={handleUpdate}>Update</button>
          </div>
        </div>
  
        <div className="row">
          <div className="col-md-8">
            <form className="formfont row g-3">
            <span >Enter Personal details</span>
            <div className="col-md-6">
                <label for="firstname" className="form-label">FIRST NAME</label>
                <input type="text" className="form-control" 
                id="firstname" required
                value={firstname}
                onChange={(e)=>setFirstname(e.target.value)}
                />
            </div>
            <div className="col-md-6">
                <label for="middlename" className="form-label">MIDDLE NAME</label>
                <input type="text" className="form-control" id="middlename"
                />
            </div>
            <div className="col-md-6">
                <label for="lastname" className="form-label">LAST NAME</label>
                <input type="text" className="form-control" id="lastname" required
                value={lastname}
                onChange={(e)=>setLastname(e.target.value)}
                />
            </div>
            <div className="col-md-6">
                <label for="email" className="form-label">EMAIL</label>
                <input type="email" className="form-control" id="email" required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className="col-md-6">
                <label for="birthdate" className="form-label">DATE OF BIRTH</label>
                <input type="date" className="form-control" id="birthdate"
                value={birthdate}
                onChange={(e)=>setBirthdate(e.target.value)}
                />
            </div>
            <div className="col-md-6">
                <label for="age" className="form-label">AGE</label>
                <input type="number" className="form-control" id="age" required
                />
            </div>
            <div className="col-md-6">
                <label for="address" className="form-label">ADDRESS</label>
                <input type="text" className="form-control" id="address"required/>
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
                <input type="text" id="state" className="form-control"/>
                    
            </div>
            <div className="col-md-2">
                <label for="zip" className="form-label">ZIP</label>
                <input type="text" className="form-control" id="zip"/>
            </div>
            
            </form>

          </div>
  
          <div className="col-md-4 d-flex flex-column align-items-end">
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
  
  export default Appupdate;
