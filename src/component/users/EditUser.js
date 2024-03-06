import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/esm/Button';

const EditUser = () => {
  const navigate = useNavigate();

  // INITIALISING THE PARAMETER {id} FOR FURTHER USAGE
  const { id } = useParams();
  
  // INITIALISING THE VARIABLES
  const [user,setUser] = useState({
    name:'',
    gender:'',
    age:'',
    phone:'',
    email:'',
    address:''
  });

//  DESTRUCTURING THE user ARRAY
  const {name, gender, age, phone, email, address} = user;

 // changeHandler EVENT FUNCTION FOR HANDLING THE INPUT CHANGES
  const changeHandler = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  // FETCHING DATA WITH THE HELP OF useEffect HOOK
  useEffect(() => {
    // RETRIVEING INDIVIDUAL DATA FROM BACKEND
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:3001/user/${id}`);
      setUser(result.data);
    };
    loadUser();
  }, [id]);

 
  // submitHandler EVENT FUNCTION FOR HANDLING THE SUBMITTING CHANGES OF THE FORM FEILDS
  const submitHandler = async e  => {
    e.preventDefault();

    // SENDING INPUT DATA INTO DATABASE USING AXIOS
    await  axios.patch(`http://localhost:3001/user/${id}`,user)
                .then(()=>alert("Updated Successfully"));
    navigate('/User');
  }

  
  
  return (
    <div 
      style={{ 
        backgroundImage: `url("https://wallpaperaccess.com/full/139155.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        height: '38.8rem'
      }}>
      
       {/* FORM CREATION FOR USER DETAILS */}
       <form align='center' >
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
              <input type='text' name='name' value={name} placeholder='Enter your name' onChange={e => changeHandler(e)} />
            </td>
          </tr>

          {/* GENDER FEILD */}
          <tr>
            <td>
              <label><strong>Gender:</strong></label>
            </td>
            <td>
              male<input type='radio' name='gender' value="male" checked={gender==="male"} onChange={e => changeHandler(e)} /> &nbsp;
              female<input type='radio' name='gender' value="female" checked={gender==="female"} onChange={e => changeHandler(e)} /> &nbsp;
              other<input type='radio' name='gender' value="other" checked={gender==="other"} onChange={e => changeHandler(e)}/> 
            </td>
          </tr>

          {/* AGE FEILD */}
          <tr>
            <td>
              <label><strong>Age:</strong></label>
            </td>
            <td>
              <input type='number' name='age' value={age} placeholder='Enter your Age' onChange={e => changeHandler(e)} />
            </td>
          </tr>

          {/* PHONE NUMBER FEILD */}
          <tr>
            <td>
              <label><strong>Phone:</strong></label>
            </td>
            <td>
              <input type='text' name='phone' value={phone} placeholder='Enter Phone Number' onChange={e => changeHandler(e)} />
            </td>
          </tr>

          {/* EMAIL FEILD */}
          <tr>
            <td>
              <label><strong>Email:</strong></label>
            </td>
            <td>
              <input type='email' name='email' value={email} placeholder='Enter email' onChange={e => changeHandler(e)} />
            </td>
          </tr>

          {/* ADDRESS FEILD */}
          <tr>
            <td>
              <label><strong>Address:</strong></label>
            </td>
            <td>
              &emsp;&emsp;&emsp;
            <textarea name='address' value={address} onChange={e => changeHandler(e)} rows={3} cols={30} />
            </td>
          </tr>
          </tbody>
        </table>

        {/* SUBMIT BUTTON */}
        <Button variant="info" onClick={submitHandler}><strong>Update User</strong></Button>
      </form>
    </div>
  )
}

export default EditUser
