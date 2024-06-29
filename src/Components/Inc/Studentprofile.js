import React, { useState, useEffect } from 'react';
import profileimg from '../Images/profileimg.png'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Studentprofile = () =>{

    const[data, setData]=useState([]);

    function getData(){
        axios
        .get("https://667d5827297972455f64b4d3.mockapi.io/CRUD-schoolerp")
        .then((res)=>{
            console.log(res.data)
            setData(res.data)

        })
    }

    function handleDelete(id){
        axios.delete(
            `https://667d5827297972455f64b4d3.mockapi.io/CRUD-schoolerp/${id}`
        ).then(()=>{
            getData();
        })
    }
    
    const setToLocalStorage=(id,firstname,lastname,birthdate,email)=>{
        localStorage.setItem("id",id)
        localStorage.setItem("firstname",firstname)
        localStorage.setItem("lastname",lastname)
        localStorage.setItem("birthdate",birthdate)
        localStorage.setItem("email",email)

    }


    useEffect(() => {
        getData();
    }, [])
    
    
  
    return (
        
        <div className="container mt-2">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Students Profile</h2>
          <div>
            <button type="button" className="btn btn-success me-2">Save</button>
            <button type="button" className="btn btn-danger">Discard</button>
          </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Birth date</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            {data.map((eachData)=>{
                return(
                    <>
                    <tbody>
                        <tr>
                            <th scope="row">{eachData.id}</th>
                            <td>{eachData.firstname}</td>
                            <td>{eachData.lastname}</td>
                            <td>{eachData.birthdate}</td>
                            <td>{eachData.email}</td>
                            <td>
                                <Link to="/Appupdate">
                                  <i class="bi bi-pencil-square" 
                                  onClick={()=> setToLocalStorage(
                                    eachData.id,
                                    eachData.firstname,
                                    eachData.lastname,
                                    eachData.birthdate,
                                    eachData.email

                                  )}></i>
                                </Link>
                            </td>
                            <td><i class="bi bi-trash3-fill" onClick={()=>handleDelete(eachData.id)}></i></td>
                        </tr>
                
                    </tbody>
                    </>
                )

            })
            }
        </table>
        </div>
    );
  }
  
  export default Studentprofile;
