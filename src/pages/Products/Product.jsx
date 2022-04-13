import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <>
      <div className="customlink">
        <Link to="/Product/AddProduct">Add Product</Link>
        <Link to="/Product/ListProduct">List Of Products</Link>
      </div>
      <div className="custom">
        <Outlet />
      </div>
    </>
  )
}

export default Product
