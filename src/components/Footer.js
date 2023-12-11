import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-dark text-white'>
      <div className='container'>
        <div className='row'>
            <div className='col-3 p-2'>
              <img src='232-removebg-preview.png' className='m-0 object-fit-contain' style={{width:"200px", height:'100px'}}/>
                  <hr/>
              <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className='col-9 p-2 row justify-content-between'>
                <div className='col-3'>
                  <ul className='pt-3'>
                    <h4 className='pb-2'>PRODUCT</h4>
                  <hr/>
                    <li className='pb-1'>Electronics</li>
                    <li className='pb-1'>Clothes</li>
                    <li className='pb-1'>Mobile</li>
                    <li className='pb-1'>Grocery</li>
                  </ul>
                </div>
                <div className='col-3'>
                  <ul className='pt-3'>
                    <h4 className='pb-2'>USEFUL LINKS</h4>
                  <hr/>
                    <li className='pb-1'>Your Account</li>
                    <li className='pb-1'>Become an Affiliate</li>
                    <li className='pb-1'>Shipping Rates</li>
                    <li className='pb-1'>Help</li>
                  </ul>
                </div>
                <div className='col-3'>
                  <ul className='pt-3'>
                    <h4 className='pb-2'>CONTACT</h4>
                  <hr/>
                    <li className='pb-1'>New York, NY 10012, US</li>
                    <li className='pb-1'>info@gmail.com</li>
                    <li className='pb-1'> + 01 234 567 88</li>
                    <li className='pb-1'>+ 01 234 567 89</li>
                  </ul>
                </div>
            </div>
                <hr/>
                <h3 className='text-center'>© 2020 Copyright: MDBootstrap.com</h3>
        </div>
         
      </div>  
      </div>
    </>
  )
}

export default Footer