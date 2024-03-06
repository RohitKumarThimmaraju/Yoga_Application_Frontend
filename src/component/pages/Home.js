import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Home.css'
import { Link } from 'react-router-dom';
import axios from 'axios'; 

const Home = () => {
  return (
    <div style={{ 
      backgroundImage: `url("https://wallpaperaccess.com/full/139155.jpg")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      height: '38.8rem'
    }}>
      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/human-energy-body-aura-chakra-meditation-illustration-42979628.jpg" />

        <Card.Body style={{ backgroundColor: 'lightblue' }}>
          <Card.Title><h3 style={{ fontFamily: 'arialblack' }}>Meditation Classes</h3></Card.Title>
          <Card.Text>
            Register for meditation clases by clicking the below button
          </Card.Text>
          <Link to="/AddUser"><Button variant="primary">Register</Button></Link>
        </Card.Body>
      </Card>
      <div>
      <h2><p className="moving-text">Thanks for visiting us.For any details contact: +91 9440596558 or visit our contact page</p></h2>
      </div>
    </div>
      
  )
}

export default Home
