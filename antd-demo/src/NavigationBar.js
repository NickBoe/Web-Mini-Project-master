import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { Row, Col, Divider } from "antd";

const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

function NavigationBar() {
  return (
    <div>
      <Divider
        orientation="left"
        //style={{ color: "#333", fontWeight: "normal" }}
      ></Divider>
      <Row>
        <Col span={6}>
          <h1>
            <NavLink to="/home" style={{ color: "black" }}>
              HOME
            </NavLink>
          </h1>
        </Col>
        <Col span={6}>
          <h1>
            <NavLink to="/CV" style={{ color: "black" }}>
              CV
            </NavLink>
          </h1>
        </Col>
        <Col span={6}>
          <h1>
            <NavLink to="/portfolio2" style={{ color: "black" }}>
              PORTFOLIO
            </NavLink>
          </h1>
        </Col>
        <Col span={6}>
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
