'use client'
import React from 'react'
import Slider from "react-slick";


const Walkways = ({data}) => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
      };
  return (
    <Slider {...settings}>
                        {data.map((img, index) => (
                            <div className='contnter-slider' key={index}>
                                <img className='img_slider' src={img}/>
                            </div>
                        ))}
                    </Slider>
  )
}

export default Walkways