import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AdminDashboard = () => {

  const [usercnt,setUsercnt] = useState();
  const [productcnt,setProductcnt] = useState();
  const [catagory,setCatagory] = useState();
  const [carts,setCarts] =useState();

  useEffect((val)=>{
    axios.get(`http://localhost:8000/users`)
    .then((res) => {
        setUsercnt(res.data.length);
      }).catch((err) => {
        console.log(err);
        return false;
  })
    axios.get(`http://localhost:8000/products`)
    .then((res) => {
        setProductcnt(res.data.length);
      }).catch((err) => {
        console.log(err);
        return false;
  })
  axios.get(`http://localhost:8000/category`)
  .then((res) => {
      setCatagory(res.data.length);
    }).catch((err) => {
      console.log(err);
      return false;
    });
    axios.get(`http://localhost:8000/carts`)
    .then((res)=>{
      setCarts(res.data.length);
    }).catch((err)=>{
      console.log(err);
      return false;
    })
})

  return (
    <div className='p-5'>
      <div className='row justify-content-between'>
        <div style={{ height: '100px', backgroundColor: 'orange' }} className='col-lg-2 p-3'>
          <h4 className='text-center text-white'>User</h4>
          <h4 className='text-center text-white'>{usercnt}</h4>
        </div>
        <div style={{ height: '100px', backgroundColor: 'orange' }} className='col-lg-2 p-3'>
          <h4 className='text-center text-white'>Product</h4>
          <h4 className='text-center text-white'>{productcnt}</h4>
        </div>
        <div style={{ height: '100px', backgroundColor: 'orange' }} className='col-lg-2 p-3'>
          <h4 className='text-center text-white'>Catagory</h4>
          <h4 className='text-center text-white'>{catagory}</h4>
        </div>
        <div style={{ height: '100px', backgroundColor: 'orange' }} className='col-lg-2 p-3'>
          <h4 className='text-center text-white'>Carts</h4>
          <h4 className='text-center text-white'>{carts}</h4>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard