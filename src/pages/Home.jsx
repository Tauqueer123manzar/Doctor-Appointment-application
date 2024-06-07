import React from 'react'
import Hero from '../components/Hero';
import Biography from '../components/Biography';
import Department from '../components/Department';
import MessageForm from '../components/MessageForm';
import heroimage from '../assets/hero (1).png';
const Home = () => {
  return (
    <div>
      <Hero
        title={
          "Welcome to Zeecare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageurl={heroimage}
      />
      <Biography/>
      <Department/>
      <MessageForm/>
    </div>
  )
}

export default Home
