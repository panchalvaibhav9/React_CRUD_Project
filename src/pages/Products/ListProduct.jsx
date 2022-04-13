import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListProduct = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get('https://6256c4796ea70370053eff99.mockapi.io/crud')
      .then((res) => {
        setApiData(res.data);
      })
  }, [])

  const setData = (id, product, productDisc) => {
    localStorage.setItem('ID', id)
    localStorage.setItem('Product', product)
    localStorage.setItem('ProductDisc', productDisc)
  }

  const GetData = () => {
    axios.get('https://6256c4796ea70370053eff99.mockapi.io/crud')
      .then((res) => {
        setApiData(res.data);
      })
  }

  const DeleteData = (id) => {
    axios.delete(`https://6256c4796ea70370053eff99.mockapi.io/crud/${id}`)
      .then(() => {
        GetData();
      })
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Name</th>
          <th scope="col">Product Discription</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          apiData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.product}</td>
                <td>{item.productDisc}</td>
                <Link to="/Product/UpdateProduct"><td className='update' onClick={() => setData(item.id, item.product, item.productDisc)}>Update</td></Link>
                <td className='delete' onClick={() => DeleteData(item.id)} >Delete</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default ListProduct
