import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
}
from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import './css/logins.css';

function ESignups() {
    return (
      <MDBContainer className="my-5 gradient-form">
  
        <MDBRow>
  
          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column ms-5">
  
              <div className="text-center">
              {/* <Image className="logo" src={logoo1} responsive/> */}
  
                <h4 className="mt-1 mb-5 pb-1">We are Strategic Jobseek</h4>
              </div>
  
              <p>Sign up to create your account</p>
  

              <MDBInput wrapperClass='mb-4' label='Please Enter Your Username' id='form1' type='text'/>
              <MDBInput wrapperClass='mb-4' label='Please Enter Your Name' id='form1' type='text'/>
              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
  
  
              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign up</MDBBtn>
           
              </div>
  
              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Already have an account?</p>
                <MDBBtn outline className='mx-2' color='danger'>
                <Link to="/login" className='navlinkk'>Sign In</Link> 
                </MDBBtn>
              </div>
  
            </div>
  
          </MDBCol>
  
          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
  
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a company</h4>
                <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
  
            </div>
  
          </MDBCol>
  
        </MDBRow>
  
      </MDBContainer>
    );
  }

  export default ESignups;