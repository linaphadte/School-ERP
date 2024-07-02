import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Facultyprofile = () =>{

    const[data, setData]=useState([]);

    function getData(){
        axios
        .get("https://667d5827297972455f64b4d3.mockapi.io/New-faculty")
        .then((res)=>{
            console.log(res.data)
            setData(res.data)

        })
    }

    function handleDelete(id){
        axios.delete(
            `https://667d5827297972455f64b4d3.mockapi.io/New-faculty/${id}`
        ).then(()=>{
            getData();
        })
    }
    
    const setToLocalStorage=(id,firstname,lastname,email,subject)=>{
        localStorage.setItem("id",id)
        localStorage.setItem("firstname",firstname)
        localStorage.setItem("lastname",lastname)
        localStorage.setItem("email",email)
        localStorage.setItem("subject",subject)


    }


    useEffect(() => {
        getData();
    }, [])
    
    
  
    return (
        
        <div className="container mt-2">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Faculty Profile</h2>
          
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Subject</th>
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
                            <td>{eachData.email}</td>
                            <td>{eachData.subject}</td>
                            <td>
                                <Link to="/Facultyupdate">
                                  <i class="bi bi-pencil-square" 
                                  onClick={()=> setToLocalStorage(
                                    eachData.id,
                                    eachData.firstname,
                                    eachData.lastname,
                                    eachData.email,
                                    eachData.subject,

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
  
  export default Facultyprofile;