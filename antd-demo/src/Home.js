import React from "react";
import { Typography } from 'antd';
import { Popover, Col, Row } from 'antd';
import { Card } from 'antd';
import { Layout } from "antd";
import { Carousel } from "antd";
import { Space, Button } from 'antd';
import { NavLink } from "react-router-dom";

import "./Home.css";

import comp from "./img/finitooo.jpg";
import { withRouter } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;
const { Title,Text, Link  } = Typography;


function Home() {



  return (
    <div>
      <div class="pcImage"></div>
      <div>
      <NavLink to="/portfolio" > <Button  type="primary" className = "marginss"
    style={{height: '104px', width : '540px'}}
    size="lg">
        <Text strong  className = "textStuff"> Portfolio  </Text>
        </Button>  </NavLink>
    </div>
    
    <div>
    <NavLink to="/portfolio2" > <Button type="danger" className = "marginss2" 
    style={{height: '104px', width : '540px'}}
    size="lg">
        <Text strong className = "textStuff" > Portfolio 2 </Text>
        </Button> </NavLink>
    </div>

    <div>
    <NavLink to="/contact" > <Button type="warning" className = "marginss3" 
    style={ {background: "yellow"}, {height: '105px', width : '541px'}}
    size="lg">
      <Text strong className = "textStuff" > Contacts</Text>
       
        </Button> </NavLink>
    </div>

    </div>
  );
}




export default Home;
