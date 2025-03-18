import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Loginpage() {
    const fst = 30;

    const { register, handleSubmit, formState: { errors } } = useForm()

    const myinputdata = (d) => {
        console.log(d);
    }

    const onClickHandler = () => {
        toast.success('Login Successfully..');
    }

    return (
        <form onSubmit={handleSubmit(myinputdata)}>
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
                                        <input type="email" className="form-control" {...register("email", { required: true })} />
                                        {errors.email && <p className="text-danger">Email is required..!</p>}
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="Password" className="form-control" {...register("password", { required: true, minLength: 8 })} />
                                        {/* {errors.password && <p className='text-danger'>Password is required..!</p> } */}
                                        {errors.password?.type === "required" && <p className='text-danger'>Password is required..!</p>}
                                        {errors.password?.type === "minLength" && <p className='text-warning'>Minimun 8 character length..!</p>}
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
                                        <button type="submit" className='btn btn-success shadow' onClick={onClickHandler}>Login</button>
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
        </form>
    )
}
export default Loginpage
