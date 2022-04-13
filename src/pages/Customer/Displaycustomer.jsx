import React from 'react';
import { useParams } from 'react-router-dom';
import { CustomersData } from '../../CustomerData';

const Displaycustomer = () => {
    const {id} = useParams();
  return (
      <div className="listOfProducts">
      <div className="productDisplay">
        <h1>{CustomersData[id - 1].name}</h1>{" "}
        <p>{CustomersData[id - 1].description}</p>{" "}
      </div>
    </div>
  )
}

export default Displaycustomer
