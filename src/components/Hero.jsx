import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import vectorimg from '../assets/Vector.png';
import '../App.css'
const Hero = ({title,imageurl}) => {
  return (
   <Container fluid>
    <div className='hero_section' style={{maxWidth:"auto",maxHeight:"auto"}}>
    <Row>
        <Col lg={7} md={6} sm={12}>
            <p style={{marginTop:"120px",fontWeight:"700",fontSize:"40px",marginLeft:"25px",maxWidth:"600px",lineHeight:"1.2"}}>{title}</p>
            <p style={{marginTop:"20px",marginLeft:"25px",maxWidth:"500px"}}>Zeecare Medical Institue is a start-of-the-art facility dedicated to providing comphrensive healthcare hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process. The modern hospital also often serves as a centre for investigation and for teaching. hospital.</p>
        </Col>
        <Col className="hero_image" lg={5} md={6} sm={12} style={{
              backgroundImage: `url(${vectorimg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <img  src={imageurl}  alt='missing image'  style={{ position: 'relative', zIndex: 1 }} />
        </Col>
    </Row>
    </div>
   </Container>
  )
}

export default Hero;
