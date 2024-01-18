import React from "react";
import img4 from "./images/img4.jpg";
import about from "./images/about.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function AboutUs() {
  return (
    <>
    <div style={{padding:"10vh",fontSize:"3vh"}}>

        <img src={about}/>
      <p>
        Welcome to Union Market Research, where curiosity meets insight. Founded
        with a passion for understanding the world through collective
        perspectives, we believe in the power of shared opinions to drive
        positive change. At UMR, we're more than just a survey platform; we're a
        community of thinkers, dreamers, and changemakers. Our mission is
        simple: to democratize data by connecting people with meaningful
        surveys. We strive to create a space where your voice matters, where
        diverse opinions converge to shape industries, products, and society.
        With a commitment to transparency and integrity, Union Market Research
        is your trusted partner in the journey of discovery. Join us on this
        exciting quest to explore, express, and empower. Together, let's
        transform the way insights are discovered and make your voice resonate
        globally. Discover the strength of unity at Union Market Research."{" "}
      </p>
    </div>
    </>
  );
}
