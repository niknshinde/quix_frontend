// Carousel1.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carousel1() {
  return (
    <div className="div">
      {/* Carousel component from react-bootstrap */}
      <Carousel>

        {/* First Carousel Item */}
        <Carousel.Item>
          {/* Box containing the image */}
          <div className="box">
            <img className='img_poster' src="/images/wolrdbest.png" alt="" />
          </div>
          {/* Caption for the first item */}
          <Carousel.Caption>
            <h3>World best language learning platform</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Carousel Item */}
        <Carousel.Item>
          {/* Box containing the image */}
          <div className="box">
            <img className='img_poster' src="/images/wolrdbest.png" alt="" />
          </div>
          {/* Caption for the second item */}
          <Carousel.Caption>
            <h3>New Language Support Coming Soon</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Third Carousel Item */}
        <Carousel.Item>
          {/* Box containing the image */}
          <div className="box">
            <img className='img_poster' src="/images/wolrdbest.png" alt="" />
          </div>
          {/* Caption for the third item */}
          <Carousel.Caption>
            <h3>Powered By Advance Quix</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default Carousel1;
