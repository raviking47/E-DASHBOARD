import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Nav() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/Signup");
  };
  return (
    <div>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/Signup">
              Logout  ({JSON.parse(auth).name})
            </Link>
          </li>{" "}
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/Signup">Sign Up</Link>
          </li>
          <li>
            {" "}
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
