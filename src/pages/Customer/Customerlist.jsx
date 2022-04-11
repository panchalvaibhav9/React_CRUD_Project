import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomersData } from '../../CustomerData';

const Customerlist = () => {

  const navigate = useNavigate();
  return (
    <div>
    <div className="productsList">
      {CustomersData.map((x) => {
        return(
          <div className='productDisplay'
          onClick={() => {
            navigate(`/Customer/${x.id}`);
          }}>
            <h1>{x.name}</h1> <p>{x.description}</p>{" "}
          </div>
        );
      })}
    </div>
    </div>
  )
}

export default Customerlist
