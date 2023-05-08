import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom'

export default function UpdateProduct() {
 
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const  params = useParams();
  const navigate =  useNavigate()
  useEffect(()=>{
    getProductDetails();
  },[])
  const getProductDetails= async()=>{
    console.warn(params._id)
    let result =  await fetch(`http://localhost:5000/product/${params._id}`,{
      method:'Get'
    });
    console.warn(result.company )
    result = await result.json()
    setName(result.name)
    setCompany(result.company)
    setPrice(result.price)
    setCategory(result.category)
  }
  const updateProduct = async ()=>{
     console.log(name,company,price,category)
     let result = await fetch(`http://localhost:5000/product/${params._id}`,{
      method:'Put',
      body:JSON.stringify({name,company,price,category}),
      headers:{
        'Content-Type':'application/json'
      }
    
     })
    navigate('/')
    }
   
  return (
    <div className="product">
      <h1 className="my-2  mx-3">Update Product</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        className="inputbox"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        type="number"
        placeholder="Enter Price"
        className="inputbox"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />
      <input
        type="text"
        placeholder="Enter category"
        className="inputbox"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />
      <input
        type="text"
        placeholder="Enter company"
        className="inputbox"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
      />
      <button onClick={updateProduct} className="appbutton">Update Product</button>
    </div>
  );
}
