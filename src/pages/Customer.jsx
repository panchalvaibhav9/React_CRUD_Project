import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Customer = () => {
  
  return (
    <>
      <div className="customlink">
        <Link className='addcustom' to="/Customer/Addcustomer">Add Customer</Link>
        <Link className='customlist' to="/Customer/Customerlist">Customer List</Link>
      </div>
      <div className="custom">
        <Outlet />
      </div>
    </>
  )
}

export default Customer
