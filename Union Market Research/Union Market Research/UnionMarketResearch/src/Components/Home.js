import React from 'react'
import imglogo from './images/imglogo.png'
import download from './images/download.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
// import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



export default function Home(){

    
    return(
        <>

           {/* <Carousel>
                <div>
                    <img src={img4}  alt="img1"  />
                </div>
                <div>
                    <img src={imglogo} alt="img1" />
                </div>
                <div>
                    <img src={img2} alt="img1"/>
                </div>
                <div>
                    <img src={img3} alt="img1"/>
                </div>
                <div>
                    <img src={img5} alt="img1"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
            <div style={{padding:"10vh"}}>
            <img src={download}  alt="img1" style={{height:450}} />
            <p style={{fontSize:25}}>
            Welcome to Union Market Research, where your opinions shape the future! 🌐 Dive into the world of impactful surveys and be a part of the change. <br/>Share your thoughts on the latest trends, products, and social issues. Your voice matters, and here at UMR, we value every insight. Explore a variety of surveys tailored just for you. Unleash the power of your opinions and join our vibrant community today! Together, let's make a difference through knowledge and understanding. Start exploring, start influencing. Your feedback, your world. #UnionMarketResearch #ShapeTheFuture
            </p>
            </div>
        </>
    )
};
// ReactDOM.render(<Carousel />, document.querySelector('.demo-carousel'));