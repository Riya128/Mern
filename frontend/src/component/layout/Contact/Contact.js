import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:riyagoel4221@gmail.com">
        <Button>Contact: Mail</Button>
      </a>
    </div>
  );
};

export default Contact;
