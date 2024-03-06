import React, { useState, useEffect } from "react";
import { Link,
  //  useParams, 
  useNavigate} from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState([]);

  // const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
      loadUsers();
    },);
  
  const loadUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3001/user');
      setUser(res.data);
    }catch (error) {
      console.log("Something is Wrong");
    } 
  }

  const deleteUser = async id => {
    await axios
              .delete(`http://localhost:3001/user/${id}`)
              .then((res) => {
                setUser(res.data)
              },()=>alert("User Added Successfully"),window.location.reload());
    loadUsers();
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
      <div className="container">
        <div className="py-4">
          <h1>Registered Users</h1>
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                {/* <th scope="col">Gender</th> */}
                <th scope="col">Age</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                {/* <th scope="col">Address</th> */}
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {user.map((user, id) => (
              <tr key={id}>
                <th scope="row">{id + 1}</th>
                <td>{user.name}</td>
                {/* <td>{user.gender}</td> */}
                <td>{user.age}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                {/* <td>{user.address}</td> */}
                <td>
                  <Link className="btn btn-dark mr-2" to={`/ViewUser/${user.id}`}>
                    View
                  </Link> 
                  <Link className="btn btn-warning mr-2" to={`/EditUser/${user.id}`}>
                    Edit
                  </Link>
                  <Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>
                    Delete
                  </Link>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div> 
  );
};

export default User;
