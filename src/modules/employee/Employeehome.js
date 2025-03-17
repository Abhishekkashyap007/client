import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdOutlineStreetview, MdOutlineRateReview, MdDelete } from 'react-icons/md'

function Employeehome() {

  const [mydata, setdate] = useState([]);

  const myapi = () => {
    axios.get('http://localhost:8800/alldata').then((d) => {
      setdate(d.data);
    })
  }

  useEffect(() => {
    myapi();
  }, []);


  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 text-center p-2'>
          <table className='table table-bordered border-primary'>
            <thead>
              <tr>
                <th scope='col'>MongoDB Id</th>
                <th scope='col'>EmployeeId</th>
                <th scope='col'>Name</th>
                <th scope='col'>Course</th>
                <th scope='col'>Email Id</th>
                <th scope='col'>Joining</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mydata.map((d, sn = 1) => {
                return (
                  <tr key={d._id}>
                    <th scope='row'>{d._id}</th>
                    <td>{d.st_id}</td>
                    <td>{d.name}</td>
                    <td>{d.course}</td>
                    <td>{d.email}</td>
                    <td>{d.month}</td>
                    <td className='text-end'>
                      <span className='badge text-bg-primary p-2'><MdOutlineStreetview /></span>
                      <span className='badge text-bg-warning ms-2 p-2'><MdOutlineRateReview /></span>
                      <span className='badge text-bg-danger ms-2 p-2'><MdDelete /></span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Employeehome
