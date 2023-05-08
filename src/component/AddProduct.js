import React, { useState } from "react";

export default function AddProduct() {
 
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error , setError]  = useState(false)
  const addProduct = async ()=>{
    if (!name || !price||!category||!company){
        setError(true)
        return false;

    }
    const userId = JSON.parse(localStorage.getItem('user'))._id
    let result = await fetch('http://localhost:5000/add-product',{
        method:'post',
        body:JSON.stringify({name,price,category,userId,company}),
        headers:{
            'Content-Type':'application/json'
        }
        
    
})
result =  await result.json();
        console.warn(result);
}
  return (
    <div className="product">
      <h1 className="my-2  mx-3">Add Product</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        className="inputbox"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      {error  && !name && <span className="invalid-input">Enter valid name</span>}
      <input
        type="number"
        placeholder="Enter Price"
        className="inputbox"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />
      {error  && !price && <span className="invalid-input">Enter valid Price</span>}
      <input
        type="text"
        placeholder="Enter category"
        className="inputbox"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />
      {error  && !category && <span className="invalid-input">Enter valid Category</span>}
      <input
        type="text"
        placeholder="Enter company"
        className="inputbox"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
        value={company}
      />
      {error  && !company && <span className="invalid-input">Enter valid Company</span>}
      <button onClick={addProduct} className="appbutton">Add Product</button>
    </div>
  );
}
