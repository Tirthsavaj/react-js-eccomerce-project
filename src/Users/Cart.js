import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Userauth from './Userauth';  
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const navigate = useNavigate();
    const [cart, setCart] = useState([]);


    const getAllCart = () => {
        if(!Userauth()){
            alert("Please Login")
            navigate('/product');
        }else{
            axios.get(`http://localhost:8000/carts?userId=${Userauth().id}`) 
            .then((res) => {
                setCart(res.data)
            }).catch((err) => {
                console.log(err);
                return false;
            })  
        }
       
    }

    useEffect(() => {
        getAllCart();
    }, [])

    return (
        <div className='container'>
            <h2 className='text-center p-4'>Cart</h2>
            <div className='row justify-content-between'>
                {
                    cart.map((val) => {
                        return (
                            <div className="card p-4 mb-3" style={{ maxWidth: 540 }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={val.image} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body ps-4">
                                            <h4 className="card-title">{val.name}</h4>
                                            <hr/>
                                            <h4 className="card-title">Price :- {val.price}</h4>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <hr/>
                                           Qty :- <input type='number' value={val.qty} />
                                           <hr/>
                                           <div className='btn btn-danger me-2 w-25'>Delete</div>
                                          
                                           <div className='btn btn-primary w-25'>Edit</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }





            </div>
        </div>
    )
}

export default Cart