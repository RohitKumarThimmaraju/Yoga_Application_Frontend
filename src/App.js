import React from 'react';
import NavigationPage from './component/layout/Navbar';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import User from './component/pages/User';
import AddUser from './component/users/AddUser';
import EditUser from './component/users/EditUser';
import ViewUser from './component/users/ViewUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExistingUser from './component/users/ExistingUser';

const App = () => {
  const exist = true;
  return (
    <div style={{ 
      backgroundImage: `url("https://wallpaperaccess.com/full/139155.jpg")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      height: '38.8rem'
  }}>
     { exist ? 
    <BrowserRouter>
      
        <NavigationPage/>
                
        <Routes>
          <Route  index element={<Home/>}/>
          <Route  path='/About' element={<About/>}/>
          <Route  path='/Contact' element={<Contact/>}/>
          <Route  path='/User' element={<User/>}/>
          <Route  path='/AddUser' element={<AddUser/>} />
          <Route  path='/ViewUser/:id' element={<ViewUser/>} />
          <Route  path='/EditUser/:id' element={<EditUser/>} />
          <Route  path='/ExistingUser' element={<ExistingUser/>} />
        </Routes>
      
    </BrowserRouter>
  : 'Login'
     }
    </div>
  )
}

export default App
