import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from './Carousel1';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardSection } from './CardSection';



const Home = () => {
  return (
    <div>
        <Carousel1/>
        <h1 className="center-text">Grammer Quiz</h1>
        <CardSection />

    </div>
  )
}

export default Home