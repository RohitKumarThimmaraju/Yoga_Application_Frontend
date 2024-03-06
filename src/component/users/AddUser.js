// RESPECTIVE IMPORT STATEMENTS
import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

// FUNCTIONAL COMPONENT STARTS
const AddUser = () => {

  // SETTING THE DATA INTO user WITH THE HELP OF USESTATE HOOK
  const [user,setUser] = useState({
    name:'',
    gender:'',
    age:'',
    phone:'',
    email:'',
    address:''
  });

  const navigate = useNavigate();
  
  // changeHandler EVENT FUNCTION FOR HANDLING THE INPUT CHANGES
  const changeHandler = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  // submitHandler EVENT FUNCTION FOR HANDLING THE SUBMITTING CHANGES OF THE FORM FEILDS
  const submitHandler = async e  => {
    e.preventDefault();

    // SENDING INPUT DATA INTO DATABASE USING AXIOS
    await axios.post("http://localhost:3001/user",user)
               .then(()=>alert("User Added Successfully"),window.location.reload());
    navigate('/AddUser');
  }

  // RETURN FOR THE MAIN FUNCTIONAL COMPONENT 
  return (
    <div 
    // PAGE BACKGROUND STYLING
    style={{ 
      backgroundImage: `url("https://wallpaperaccess.com/full/139155.jpg")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      height: '38.8rem'
    }}>

      {/* FORM CREATION FOR USER DETAILS */}
      <form align='center'>
        <br/>

        {/* FORM HEADING */}
        <h1>Fill your Details</h1>
        <br/>

        {/* KEEPING THE FORM INSIDE THE TABLE FOR ALLIGNMENT OF FORM FEILDS */}
        <table align='center'>
        <tbody>
          {/* NAME FEILD  */}
          <tr>
            <td>
              <label><strong>Full Name:</strong></label>
            </td>
            <td>
              <input type='text' name='name' placeholder='Enter your name' onChange={changeHandler} />
            </td>
          </tr>

          {/* GENDER FEILD */}
          <tr>
            <td>
              <label><strong>Gender:</strong></label>
            </td>
            <td>
              Male<input type='radio' name='gender' value={'male'} onChange={changeHandler} /> &nbsp;
              Female<input type='radio' name='gender' value={'female'} onChange={changeHandler} /> &nbsp;
              Other<input type='radio' name='gender' value={'other'} onChange={changeHandler}/> 
            </td>
          </tr>

          {/* AGE FEILD */}
          <tr>
            <td>
              <label><strong>Age:</strong></label>
            </td>
            <td>
              <input type='number' name='age' placeholder='Enter your Age' onChange={changeHandler} />
            </td>
          </tr>

          {/* PHONE NUMBER FEILD */}
          <tr>
            <td>
              <label><strong>Phone:</strong></label>
            </td>
            <td>
              <input type='text' name='phone' placeholder='Enter Phone Number' onChange={changeHandler} />
            </td>
          </tr>

          {/* EMAIL FEILD */}
          <tr>
            <td>
              <label><strong>Email:</strong></label>
            </td>
            <td>
              <input type='email' name='email' placeholder='Enter email' onChange={changeHandler} />
            </td>
          </tr>

          {/* ADDRESS FEILD */}
          <tr>
            <td>
              <label><strong>Address:</strong></label>
            </td>
            <td>
              &emsp;&emsp;&emsp;
            <textarea name='address'  onChange={changeHandler} rows={3} cols={30} />
            </td>
          </tr>
          
          </tbody>
        </table>
        <br/>
        {/* SUBMIT BUTTON */}
        <Button variant="dark" onClick={submitHandler}><strong>Register</strong></Button>
      </form>
    </div>
  )
}

export default AddUser;
