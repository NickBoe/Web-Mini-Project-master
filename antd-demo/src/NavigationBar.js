import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { Row, Col, Divider } from "antd";

function NavigationBar() {
  return (
    <div>
      <Divider
        orientation="left"
        //style={{ color: "#333", fontWeight: "normal" }}
      ></Divider>
      <Row>
        <Col span={8}>
          <h1>
            <NavLink to="/" style={{ color: "black" }}>
              HOME
            </NavLink>
          </h1>
        </Col>
        <Col span={8}>
          <h1>
            <NavLink to="/portfolio2" style={{ color: "black" }}>
              PORTFOLIO
            </NavLink>
          </h1>
        </Col>
        <Col span={8}>
          <h1>
            <NavLink to="/contact" style={{ color: "black" }}>
              CONTACT/SOCIAL MEDIA
            </NavLink>
          </h1>
        </Col>
      </Row>
    </div>
  );
}

export default NavigationBar;
