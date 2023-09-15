import React from 'react';

const Contact = () => {
  return (
    <>

    <form >
  <div class="form-group">
    <label style={{marginLeft:'20px'}}for="exampleInputEmail1">Email address</label>
    <input style={{marginLeft:'20px'}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small style={{marginLeft:'20px'}} id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
  <label style={{marginLeft:'20px'}}for="exampleInputPassword1" >Password</label>
    <input style={{marginLeft:'20px'}} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input style={{marginLeft:'1px'}} type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label  className="form-check-label" htmlFor="exampleCheck1">Check me out</label>

  </div>
  <button style={{marginLeft:'20px'}} type="submit" class="btn btn-primary">Submit</button>
</form>
 
      
    </>
  );
};
export default Contact;