import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Loginpage() {

    const mynav = useNavigate();
    const [myform, setmyform] = useState({
        email: "",
        pass: ""
    });

    const chaninput = (e) => {
        const { name, value } = e.target;
        setmyform((uu) => ({
            ...uu,
            [name]: value
        }))
    }

    const userlogin = async () => {
        const { email, pass } = myform;
        const datares = await fetch('http://localhost:8800/loginpage', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email, pass
            })
        });
        const resdata = await datares.json();
        if (resdata.status === 460) {
            toast.error("email not found");
        }
        if (resdata.status === 466) {
            toast.error("record not found", { autoClose: 2000, theme: "dark" });
        }
        if (resdata.status === 240) {
            toast.success("Welcome to successfully login", { autoClose: 2000, theme: "dark" });
            setTimeout(() => {
                mynav('/landing');
            }, 2000)
        }

    }


    const fst = 30;

    return (
        // <form onSubmit={handleSubmit(myinputdata)}>
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-5 p-5 bg-primary rounded'>
                    <div className='container-fluid'>
                        <div className='row text-white'>
                            <div className='col-12 text-center pb-3'>
                                <p style={{ textShadow: '2px 2px 5px black', fontSize: `${fst}px` }}>EMPLOYEE LOGIN PAGE</p>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="text" className="form-control" name="email" value={myform.email} onInput={chaninput} />
                                    {/* {errors.email && <p className="text-danger">Email is required..!</p>} */}
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="text" className="form-control" name="pass" value={myform.pass} onInput={chaninput} />
                                    {/* {errors.password && <p className='text-danger'>Password is required..!</p> } */}
                                    {/* {errors.password?.type === "required" && <p className='text-danger'>Password is required..!</p>}
                                        {errors.password?.type === "minLength" && <p className='text-warning'>Minimun 8 character length..!</p>} */}
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Remember Me</label>
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div className="mb-3">
                                    <button type="button" className='btn btn-success shadow' onClick={userlogin}>Login</button>
                                    <Link className='btn btn-outline-warning shadow ms-3' to='registor'>Registor</Link>
                                    <Link className='btn btn-outline-danger shadow ms-3' to='landing'>Apps Landing Page</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={6000} />
        </div>
        // </form>
    )
}
export default Loginpage
