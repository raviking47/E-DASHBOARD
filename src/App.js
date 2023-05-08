import "./App.css";
import Footer from "./component/Footer";
import Nav from "./component/Nav";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./component/SignUp";
import PrivateComponent from "./component/PrivateComponent";
import Login from "./component/Login";
import AddProduct from "./component/AddProduct";
import ProductList from "./component/ProductList";
import UpdateProduct from "./component/UpdateProduct";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
    
        <Routes>
          <Route element={<PrivateComponent/>}> 
        <Route path="/" element={<ProductList/>} />
          <Route path="/add" element={<AddProduct/>} />
          <Route path="/update/:_id" element={<UpdateProduct/>} />
          <Route path="/profile" element={<h1>Profile Update</h1>} />
          <Route path="/logout" element={<h1>logout Component</h1>} />
          </Route>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          
        </Routes>
      </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
