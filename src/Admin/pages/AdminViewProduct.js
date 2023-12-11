import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom'
const AdminViewProduct = () => {
    console.log(AdminViewProduct);
    const [product, setProduct] = useState([]);
    const [marketstatus, setMarketStatus] = useState(["trending", "latest", "upcomming", "best"])
    const [status,setStatus] = useState(["instock","outstock"])
    const [selectMarketStatus,setSelectMarketStatus] = useState("");

    const changeMarketStatus = (upid,value) => {
        axios.patch(`http://localhost:8000/products/${upid}`,{
            marketstatus : value
        }).then((res)=>{
            toast.success("Status Successfully update");
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    const changeStatus = (upid,value) => {
        axios.patch(`http://localhost:8000/products/${upid}`,{
            status : value
        }).then((res)=>{
            toast.success("Status Successfully update");
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/products`)
            .then((res) => {
                setProduct(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }, [])

    return (
        <div className="ps-5 col-lg-12 pt-2">
            <div style={{ boxShadow: '3px 3px 5px 6px #ccc' }} className="mt-3 p-5">
                <h3 className="text-center">View Product</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Market Status</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((val) => {
                                return (
                                    <tr>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.price}</td>
                                        <td>
                                            <select onChange={ (e) => changeMarketStatus(val.id,e.target.value)} className='form-control'>
                                                <option>select market status</option>
                                                {
                                                    marketstatus.map((item) => {

                                                        return (val.marketstatus === item ? <option selected>{val.marketstatus}</option> : <option>{item}</option>)
                                                    })
                                                }
                                            </select>
                                        </td>
                                        <td>
                                            <select onChange={ (e) => changeStatus(val.id,e.target.value) } className='form-control'>
                                                <option>---select status---</option>
                                                {
                                                    status.map((item) => {

                                                        return (val.status === item ? <option selected>{val.status}</option> : <option>{item}</option>)
                                                    })
                                                }
                                            </select>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>


            </div>

            <button className="btn btn-primary mt-5">
                <NavLink to={`/admin/product`} className="text-white">Add Product</NavLink>
            </button>
        </div>
    )
}

export default AdminViewProduct