import React from "react";
import "./App.css";

import Button from "antd/es/button";
import { Layout } from "antd";
import { Typography } from "antd";
import { Carousel } from "antd";

import Face3d from "./img/model.jpg";
import CowImg from "./img/AmagerFaelled_2.jpg";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

function Portfolio() {
  return (
    <div className="App">
      <Layout>
        <Carousel autoplay>
          <div>
            <img
              src={Face3d}
              className="photoCenter"
              alt="3d model of a face"
            ></img>
          </div>
          <div>
            <img
              src={CowImg}
              className="photoCenter"
              alt="Highlander cow photography"
            ></img>
          </div>
          <div>
            <img
              src={Face3d}
              className="photoCenter"
              alt="3d model of a face"
            ></img>
          </div>
          <div>
            <img
              src={CowImg}
              className="photoCenter"
              alt="Highlander cow photography"
            ></img>
          </div>
        </Carousel>
        <Layout>
          <Layout>
            <Content>Discover my art and projectwork.</Content>
          </Layout>
        </Layout>
        <Header>Portfolio</Header>
      </Layout>
    </div>
  );
}

export default Portfolio;
