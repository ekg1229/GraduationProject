import React from "react";

import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import Navbarss from "../components/Navbar/Navbarss";
import Footer from "../components/Navbar/Footer";

import Light from "../components/Light";
import {Helmet} from'react-helmet'
import '../../App.css'

//신호등 페이지
export default () => {
  return (
    <div className="App" style={{background: "#E0F2FE",}}>
    <Helmet>
      <title>척추요정 신호등 페이지</title>
    </Helmet>

      {/*Nav 영역*/}
      <Row className="justify-content-md-center">
        <Col xs={12}  className="mb-1">
          <Navbarss/>
        </Col>
      </Row>

      {/*Nav 밑에 여백*/}
      <Row xs={1} style={{height: "15vh", fontSize: "2.9rem", textAlign: "center", alignItems: "center", justifyContent: "center", margin: "0 auto", color: "black"}}> <b> 당신의 척추 건강 신호등 </b> </Row>
      
      <Col xs={12} xl={12} className="mb-4" >
        <Row>
        <Col xs={12} xl={1} className="mb-4" ></Col>

        {/*척추 신호등 영역*/}
        <Col xs={12} xl={1} className="mb-4" style={{width: "60vw", height: "55vh", alignItems: "center", justifyContent: "center", margin: "0 auto", background: '#F1F6F5', borderRadius: '15px', marginLeft: "10vw", marginRight: "10vh", }}>
          <br/><Light/>
        </Col>

        <Col xs={12} xl={1} className="mb-4" ></Col>

        </Row>
      </Col>

      {/*Footer 영역*/}
      <Row className="justify-content-md-center" style={{height: "15vh", background: "#E0F2FE",}}>
        <Col xs={12}  className="mb-1" >
          <Footer/>
        </Col>
      </Row>
    </div>
  );
};