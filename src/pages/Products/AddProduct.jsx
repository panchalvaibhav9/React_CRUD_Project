import React, { useState } from 'react';
import axios from 'axios';


const AddProduct = () => {

  const [product, setProduct] = useState('');
  const [productDisc, setProductDisc] = useState('');

  console.log(product);
  console.log(productDisc);

  const sendDataToAPI = (e) => {
    e.preventDefault();
    axios.post('https://6256c4796ea70370053eff99.mockapi.io/crud', {
      product,
      productDisc
    })
  }

  return (
    <form>
      <div className='form'>
        <div className="form-group">
          <label>Product Name</label>
          <input type="text" className="form-control" id="name" onChange={(e) => setProduct(e.target.value)} placeholder="Product Name" />
        </div>
        <div className="form-group">
          <label>Product Discription</label>
          <textarea type="text" className="form-control" id="disc" onChange={(e) => setProductDisc(e.target.value)}
            placeholder="Product Discription" />
        </div>
        <button type='submit' onClick={sendDataToAPI}>Submit</button>
      </div>
      </form>
  )
}

export default AddProduct
