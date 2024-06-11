import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import logo from '../assets/medical-logo (4).png'
import '../App.css'
const Topbar = () => {
  return (
    <Navbar expand="lg" className="navbar">
    <Container fluid>
      <Navbar.Brand>
        <img src={logo} alt='logo missing' style={{width:"220px",height:"65px"}}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-auto my-2 my-lg-0"
          style={{ maxHeight: '100%',maxWidth:"100%" }}
          navbarScroll
        >
          <Nav.Link className='text-secondary' style={{fontWeight:"bold"}} href="#Home">Home</Nav.Link>
          <Nav.Link className='text-secondary' style={{fontWeight:"bold"}} href="#Appointment">Appointment</Nav.Link>
          <Nav.Link className='text-secondary' style={{fontWeight:"bold"}} href="About us">About us</Nav.Link>
        </Nav>
          <Button variant="outline-success" style={{borderRadius:"10px",width:"100px",backgroundColor:"black",color:"white"}}>Login</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Topbar
