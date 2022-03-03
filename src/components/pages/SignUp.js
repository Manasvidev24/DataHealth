import React from 'react';
import '../../App.css';
import BasicForm2 from '../BasicForm2';
import BasicForm1 from '../BasicForm1';
  function SignUp() {
  return (
  <>
  <h1 className='signup'></h1>
   <div className='form' >
      <table>
      <ul>         
         <BasicForm2/>
      </ul>
      <ul>
         <BasicForm1/>
      </ul>
      </table>     
      </div>
    </>
  );
}
  
export default SignUp;  




