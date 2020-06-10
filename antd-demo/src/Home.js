import React from "react";
import { Typography } from 'antd';
import { Button } from 'antd';
import { NavLink } from "react-router-dom";

import "./Home.css";

const { Text } = Typography;

function Home() {
  return (
    <div>
      <div class="pcImage">   
      <div>
        <div class="animate__animated animate__fadeIn">
          <NavLink to="/portfolio2" > 
          <Button type="danger" className = "marginss2" 
          style={{height: '157px', width : '540px'}}>
          <Text strong className = "textStuff" > Portfolio </Text>
          </Button> </NavLink>
        </div>
      </div>

      <div>
        <div class="animate__animated animate__fadeIn">
          <NavLink to="/contact" > 
          <Button type="primary" className = "marginss3" 
          style={ {background: "yellow"}, {height: '157px', width : '541px'}}>
          <Text strong className = "textStuff" > Contact & Social Media</Text>
          </Button> </NavLink>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
