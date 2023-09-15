import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';
const Navbar=()=> {
    
    
    return (
      <>
      {/* yqhn div m class fluid bg ye sb hum ne add kia h colmn b add kia h 10 taky centre m ho */}
      <div className="container-fluid">
        <div className='row'> 
        {/* is ko agr cher ri to navbar ajeeb hojti */}
         {/* <div className ="col-10 mx-auto"> */}

          
{/* Yhn is m href ki jaga to laga dya h or start m “#” ki jaga back slash dia taky by default wo homep jaye or agr koi ulta siddha likhta koi tb b home p jayebaki   to=”/contact” aesy likha h is ka mtlb contact p click karo navbar p to us p chly jao etc */}

         
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">HarmainTech</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
        </li>
       
        
      </ul>
     
    </div>
  </div>
</nav>
</div>
        {/* </div>  */}
       </div>
        
      </>
    );
  };
  export default Navbar;