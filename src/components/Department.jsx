import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Ent from '../assets/ent.jpg';
import Cardiology from '../assets/cardio.jpg';
import Neurology from '../assets/neuro.jpg';
import Radiology from '../assets/radio.jpg';
import Orthopedics from '../assets/ortho.jpg';
import Pediatrics from '../assets/pedia.jpg';
import Oncology from '../assets/onco.jpg';
import Therapy from '../assets/therapy.jpg';
import Dermatology from '../assets/derma.jpg';
import '../App.css'; // Ensure you have the appropriate styles here

const Department = () => {
  const departmentData = [
    { id: 1, name: "CARDIOLOGY", image: Cardiology },
    { id: 2, name: "NEUROLOGY", image: Neurology },
    { id: 3, name: "RADIOLOGY", image: Radiology },
    { id: 4, name: "ENT DOCTOR", image: Ent },
    { id: 5, name: "ORTHOPEDICS", image: Orthopedics },
    { id: 6, name: "THERAPY", image: Therapy },
    { id: 7, name: "DERMATOLOGY", image: Dermatology },
    { id: 8, name: "PEDIATRICS", image: Pediatrics },
    { id: 9, name: "ONCOLOGY", image: Oncology },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1,
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="container departments">
      <h2>Departments</h2>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["medium","small"]}
      >
        {departmentData.map((depart, index) => (
          <div key={depart.id} className="department-card">
            <div className="depart-name text-secondary">{depart.name}</div>
            <img src={depart.image} alt={depart.name} className="depart-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Department;
