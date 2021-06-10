import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import img1 from '../images/seats.jpg'
import '../Carousel.css'
import img2 from '../images/ball.jpg'
import img3 from '../images/base.jpg'



export default class Slider extends Component {

  constructor(props) {
    super()
  }

  render() {
    return (
      <div className='slider'>
     <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-50 h-25"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>SEE  YOU AT THE GAMES</h3>
      <p>please our enjoy this fun little app</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 h-25"
      src={img3}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>STAY SAFE</h3>
      <p>these are crazy times were living in, please mask up and stay safe</p>
    </Carousel.Caption>
  </Carousel.Item>
 
 
 
 
</Carousel>
</div>
    )

  }




}

