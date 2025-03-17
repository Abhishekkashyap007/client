import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Loginpage from './modules/auth/Loginpage';
import Userregistor from './modules/auth/Userregistor';
import Mylandingpage from './modules/dashboard/Mylandingpage';
import Employeepage from './modules/employee/Employeepage';
import Employeehome from './modules/employee/Employeehome';
import Employeeabout from './modules/employee/Employeeabout';
import Employeecontact from './modules/employee/Employeecontact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Loginpage />}></Route>
        <Route path='registor' element={<Userregistor />}></Route>
        <Route path='landing' element={<Mylandingpage />}></Route>
        <Route path='landing/employee' element={<Employeepage />}>
          <Route path='' element={<Employeehome />}></Route>
          <Route path='about' element={<Employeeabout/>}></Route>
          <Route path='contact' element={<Employeecontact/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

