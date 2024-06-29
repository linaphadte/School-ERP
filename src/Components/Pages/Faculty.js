import React from 'react';
import { useState } from 'react';
import Sidebar from '../Inc/Sidebar';
import Navbar from '../Inc/Navbar';
import Newfaculty from '../Inc/Newfaculty';



function Faculty() {
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
            <Newfaculty />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
