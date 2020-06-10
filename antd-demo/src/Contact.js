import React from "react";
import { Popover, Col, Row } from 'antd';

import "./Contact.css";

import phone from "./img/phoneIcon.png";
import mail from "./img/mail.png";
import instaIcon from "./img/instagram.png";
import linkedinIcon from "./img/linkedin.png";

function Contact() {

  return (
      // Enables Animate.css on the webpage
     <div>
      <div class="bgImage"></div>       
      <div class="icons">               
      <Row justify='center'>              
      <Col span={6}>
        <Popover content={"+45 XX XX XX XX"} title="Telephone number">
        <div class="animate__animated animate__backInLeft"> 
          <img alt="Phone" width="60%" src={phone}/>
          </div>
        </Popover>
      </Col>

      <Col span={6}>
        <Popover content={"portfolio@gmail.com"} title="Email address">
        <div class="animate__animated animate__backInDown">
          <img alt="Email" width="60%" src={mail} />
        </div>
        </Popover>
      </Col>

      <Col span={6}>
        <a href="https://www.instagram.com/">
        <div class="animate__animated animate__backInUp">
          <img alt="Social media networking" width="60%" src={instaIcon} />
          </div>
        </a>
      </Col>
      <Col span={6}>
        <a href="https://www.linkedin.com/">
        <div class="animate__animated animate__backInRight">
          <img alt="Social media networking" width="60%" src={linkedinIcon} />
         </div>
        </a>
      </Col>
      </Row>
      </div>
      </div>
  );
}


export default Contact;
