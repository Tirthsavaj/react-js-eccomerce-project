import React from 'react'
import { NavLink } from 'react-router-dom'
import Userauth from '../Users/Userauth'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    let d = JSON.parse(localStorage.getItem('checkUserLogin'));
    console.log(d);

    const logout = () => {
        localStorage.clear('checkUserLogin');
        navigate('/');
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg header-color">
                <div className="container-fluid">
                    <div className='col-4'>
                    <NavLink to='/' className="navbar-brand text-dark fs-2">
                        <img src='232-removebg-preview.png' className='m-0 object-fit-contain' style={{width:"200px", height:'100px'}}/>
                    </NavLink>
                    </div>
                    <div className="col-6 collapse navbar-collapse custom-nav d-flex justify-content-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link active text-white text-uppercase px-3" aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/product' className="nav-link text-white text-uppercase px-3" >Product</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link text-white text-uppercase px-3">Product Details</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to={`/cart`} className="nav-link text-white text-uppercase px-3" >Cart</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link text-white text-uppercase px-3" href="#">Contact</NavLink>
                            </li>

                            
                        </ul>

                    </div>
                    <div className='col-2 align-center'>
                    <div className='d-flex justify-content-end'>
                            { !d ? (<>
                                    <NavLink to='/login' className="nav-link active  text-dark px-3" aria-current="page" ><button className='btn btn-success'>Login</button></NavLink>
                                    <NavLink to='/register' className="nav-link active  text-dark" aria-current="page" ><button className='btn btn-secondary'>Register</button></NavLink>
                            </>) : (
                                    <NavLink onClick={ () => logout() } className="nav-link active  text-dark" aria-current="page" ><button className='btn btn-danger'>Logout</button></NavLink>
                            )
                           } 
                            </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header