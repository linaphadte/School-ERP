import React from 'react';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Inc/Navbar';
import Sidebar from './Components/Inc/Sidebar';
import Studentprofile from './Components/Inc/Studentprofile';
import { Routes, Route } from 'react-router-dom';
import Newapp from './Components/Inc/Newapp';
import Newfaculty from './Components/Inc/Newfaculty';
import Appupdate from './Components/Inc/Appupdate';


function App() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <Navbar Toggle={Toggle} />
      <div className='container-fluid mt-3'>
        <div className='row'>
          {toggle && (
            <div className='col-4 col-md-2'>
              <Sidebar />
            </div>
          )}
          <div className='col'>
            <Routes>
              <Route path="/" element={<Studentprofile />} />
              <Route path="/newapp" element={<Newapp />} />
              <Route path="/newfaculty" element={<Newfaculty/>}/>
              <Route path="/appupdate" element={<Appupdate/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App
