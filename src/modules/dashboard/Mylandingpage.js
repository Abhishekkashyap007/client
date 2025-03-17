import React from 'react'
import { Link } from 'react-router-dom'
import { FcBusinessman } from "react-icons/fc";

function Mylandingpage() {
  return (
    <div className='container mt-3 apps'>
      <div className='row justify-content-center'>
        <div className='col-md-12 p-5 bg-primary rounded shadow'>
          <div className='container-fluid'>
            <div className='row text-white'>
              <div className='col-12 text-center pb-3'>
                <p className='h2'>Welcome to Application List</p>
              </div>
              <div className='col-md-3 mt-5 text-center'>
                <Link to='employee'>
                  <div className="card p-3 shadow rounded rounded-circle">
                    <p className='h1 text-center'><FcBusinessman size={75} /></p>
                    <div className="card-body">
                      <h5 className="card-title">Employee List</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-3 mt-5 text-center'>
                <Link to='course'>
                  <div className="card p-3 shadow rounded rounded-circle">
                    {/* <p className='h1 text-center'><PiChalkboardTeacherDuotone size={50} /></p> */}
                    <div className="card-body">
                      <h5 className="card-title">Courses</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-3 mt-5 text-center'>
                <Link to='payment'>
                  <div className="card p-3 shadow rounded rounded-circle">
                    {/* <p className='h1 text-center'><PiStudentFill size={50} /></p> */}
                    <div className="card-body">
                      <h5 className="card-title">Student Management</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-3 mt-5 text-center'>
                <Link to='payment'>
                  <div className="card p-3 shadow rounded rounded-circle">
                    {/* <p className='h1 text-center'><GiTeacher size={50} /></p> */}
                    <div className="card-body">
                      <h5 className="card-title">Classes</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-3 mt-5 text-center'>
                <Link to='jsondata'>
                  <div className="card p-3 shadow rounded rounded-circle">
                    {/* <p className='h1 text-center'><FaRupeeSign size={50} /></p> */}
                    <div className="card-body">
                      <h5 className="card-title">json CRUD</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-3 mt-5 text-center'>
                <Link to='payment'>
                  <div className="card p-3 shadow rounded rounded-circle">
                    {/* <p className='h1 text-center'><GrUserExpert size={50} /></p> */}
                    <div className="card-body">
                      <h5 className="card-title">Teacher Management</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-3 mt-5 text-center'>
                <Link to='payment'>
                  <div className="card p-3 shadow rounded rounded-circle">
                    {/* <p className='h1 text-center'><GrNotes size={50} /></p> */}
                    <div className="card-body">
                      <h5 className="card-title">Notes</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-3 mt-5 text-center'>
                <Link to='payment'>
                  <div className="card p-3 shadow rounded rounded-circle">
                    {/* <p className='h1 text-center'><FaHandsHelping size={50} /></p> */}
                    <div className="card-body">
                      <h5 className="card-title">Help Section</h5>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mylandingpage
