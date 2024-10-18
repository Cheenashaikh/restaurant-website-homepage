import React, { useEffect } from "react";
import Slider from "react-slick"; 
// import "./gallery/gallery.css";
import { choice } from "../../../utilis/choice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos'
import 'aos/dist/aos.css';
import './choice.css'

function Choice() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,            
        autoplaySpeed: 3000,   
        arrows: false,     
    };
    useEffect(()=>{
        Aos.init({
            duration:1000,
            once:false,
            offset:100
        });
        // Aos.refresh();
    },[])

    return (
        <div className="choose">
            <div className="heading">
                <span className="right_line2"></span>
                <h6>Why people choose us</h6>
                <span className="left_line2"></span>
                <div className="para">
                    <h2 style={{marginLeft:"230px"}}>Prepare for first-class service</h2>
                </div>
            </div>
            
            <div className="slider">
                <Slider {...settings}>
                    {choice.map((data, index) => {
                        return (
                            <div className="imageSlider" key={index} data-aos="ease">
                                <div><img src={data.image} alt={`Gallery Item ${index}`} />
                                <p>{data.text}</p></div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default Choice;       