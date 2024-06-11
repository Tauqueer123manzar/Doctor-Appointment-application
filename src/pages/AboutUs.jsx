import React from 'react'
import Hero from '../components/Hero';
import Biography from '../components/Biography';
import about from '../assets/about.png';
import whoweare from '../../src/assets/whoweare.png'
const AboutUs = () => {
  return (
    <>
      <Hero
        title={
          "Learn More ABout Us | Zeecare Medical Institute"
        }
        imageurl={about}
      />
      <Biography  imageurl={ whoweare} 
      />
    </>
  )
}

export default AboutUs

