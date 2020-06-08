import React from "react";
import "./App.css";

import { Layout } from "antd";
import { Carousel } from "antd";
import Face3d from "./img/model.jpg";
import CowImg from "./img/AmagerFaelled_2.jpg";

const { Header, Content } = Layout;

function CV() {
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
        <Header>CV</Header>
      </Layout>
    </div>
  );
}

export default CV;
