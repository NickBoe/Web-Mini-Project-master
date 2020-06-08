import React from "react";
import { Typography } from 'antd';
import { Popover, Col, Row } from 'antd';

import "./Contact.css";

import phone from "./img/phoneIcon.png";
import mail from "./img/mail.png";
import instaIcon from "./img/instagram.png";
import linkedinIcon from "./img/linkedin.png";
import bckGround from "./img/prismatic.jpg";

const { Title } = Typography;

const instaContent = (
<div className="InstaText">
<h1><a href="https://www.instagram.com/"> Instagram</a></h1>
</div>

);
function Contact() {
  return (
      <div>
      <div class="bgImage"></div>
      <div class="cards">
      <Row justify='center'>
      <Col span={6}>
        <Popover content={"+45 XX XX XX XX"} title="Telephone number">
          <img alt="Phone" width="60%" src={phone}/>
        </Popover> 
      </Col>

      <Col span={6}>
        <Popover content={"portfolio@gmail.com"} title="Email address">
          <img alt="Email" width="60%" src={mail} />
        </Popover> 
      </Col>

      <Col span={6}>
        <a href="https://www.instagram.com/">
          <img alt="Social media networking" width="60%" src={instaIcon} />
        </a>
      </Col>
      <Col span={6}>
        <a href="https://www.linkedin.com/">
          <img alt="Social media networking" width="60%" src={linkedinIcon} />
        </a>
      </Col>
      </Row>
      </div>
      </div>
  );
}


export default Contact;
