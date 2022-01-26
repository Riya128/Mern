import React from "react";
import "./aboutSection.css";
import { Button, Typography } from "@material-ui/core";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Typography>Riya</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>This is a sample ECOMMERCE wesbite.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
