 import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "../index.css";
import { useAuth } from "../store/auth";
 
 export const Navbar = () =>{

  const { isLoggedIn } = useAuth();


    return(
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">mk dhawan</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/service">service</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>


      { isLoggedIn ?
        <li className="nav-item">
        <NavLink className="nav-link" to="/logout">Logout</NavLink>
      </li> 
      : <>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      </> }
      



      
      
    </ul>
  </div>
</nav>

       </>
    );
  };