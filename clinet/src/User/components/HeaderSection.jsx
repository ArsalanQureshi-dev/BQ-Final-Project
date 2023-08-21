
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function HeaderSection() {

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/1200x/f1/2f/28/f12f28f99b8bcba0441b67c5334bca1e.jpg" height={650}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" height={650}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1065329058/photo/premium-mens-watch-on-hand-close-up.jpg?s=612x612&w=0&k=20&c=VdpUac8ObrDZZ0I8OCD_vOxPqyOUCa3cM8zoqXsPkuE=" height={650}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  )
}