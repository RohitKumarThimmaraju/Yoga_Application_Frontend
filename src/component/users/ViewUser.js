import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name:'',
    gender:'',
    age:'',
    phone:'',
    email:'',
    address:''
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, );

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/user/${id}`);
    setUser(res.data);
  };
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
      <Link className="btn btn-primary" to="/User">
        back to Users
      </Link>
      <h1 className="display-4">User Id:{id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item"><b>Name:</b> {user.name}</li>
        <li className="list-group-item"><b>Gender:</b> {user.gender}</li>
        <li className="list-group-item"><b>Age:</b> {user.age}</li>
        <li className="list-group-item"><b>Phone:</b> {user.phone}</li>
        <li className="list-group-item"><b>Email:</b> {user.email}</li>
        <li className="list-group-item"><b>Address:</b> {user.address}</li>
      </ul>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <Link className="btn btn-warning" to={`/EditUser/${id}`}>
        Edit Details
      </Link>
      
    </div>
  );
};

export default User;
