import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/product");
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      alert("Product Delete");
      getProducts();
    }
  };
  return (
    <div className="product-list">
      <h1>ProductList</h1>
      <ul>
        <li>S.no</li>
        <li>Name</li>
        <li>Company</li>
        <li>Category</li>
        <li>Price</li>
        <li>Operation</li>
      </ul>
      {products.map((item, index) => (
        <ul>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.company}</li>
          <li>{item.category}</li>
          <li>{item.price}</li>
          <li>
            <button
              className="btn btn-primary"
              onClick={() => deleteProduct(item._id)}
            > 
              Delete
            </button>
            <Link to={"/update/"+item._id}>Update</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
