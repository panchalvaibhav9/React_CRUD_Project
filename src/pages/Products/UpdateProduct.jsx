import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateProduct = () => {

  const [product, setProduct] = useState('');
  const [productDisc, setProductDisc] = useState('');
  const [id, setId] = useState('');

  console.log(product);
  console.log(productDisc);

  const sendDataToAPI = (

  ) => {
    axios.put(`https://6256c4796ea70370053eff99.mockapi.io/crud/${id}`, {
      product,
      productDisc
    })
  }

  useEffect(() => {
    setProduct(localStorage.getItem('Product'));
    setProductDisc(localStorage.getItem('ProductDisc'));
    setId(localStorage.getItem('ID'));
  }, [])

  return (
      <form>
        <div className='form'>
          <div className="form-group">
            <label>Product Name</label>
            <input type="text" className="form-control" id="name" value={product} onChange={(e) => setProduct(e.target.value)} placeholder="Product Name" />
          </div>
          <div className="form-group">
            <label>Product Discription</label>
            <textarea type="text" className="form-control" id="disc" value={productDisc} onChange={(e) => setProductDisc(e.target.value)}
              placeholder="Product Discription" />
          </div>
          <button type='submit' onClick={sendDataToAPI}>Update</button>
        </div>
      </form>
  )
}

export default UpdateProduct
