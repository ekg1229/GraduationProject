import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup, Nav, Navbar } from '@themesberg/react-bootstrap';

import { CounterWidget,  SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { Link } from "react-router-dom";
import Gachon from "../../assets/img/gachonlogo.png"
import Navbarss from "../components/Navbar/Navbarss";
import Footer from "../../components/Footer";
import main from "/home/front/ReactProject3/src/gachonmain.png"


import ReactPlayer from "react-player";
import {Helmet} from'react-helmet'

// 대시보드 첫 페이지


export default () => {
  return (
    <>
    <Helmet>
      <title>척추요정 대시보드 페이지</title>
    </Helmet>

<Row className="justify-content-md-center">
      <Col xs={12}  className="mb-1">
<Navbarss/>
      </Col>
      </Row>


      <Row className="justify-content-md-center" 
      style={{justifyContent: 'center',
      alignItems: 'center'}}>
        <div style={{ width: "1950px", height: "1000px", 
        backgroundImage: `url(${main})`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center top",
        backgroundSize: 'cover',
        opacity: "0.3"}}>


          <div class="wrapper">
            <div class="content">중앙</div>
          </div>




        </div>
      
      </Row>








      <Row className="justify-content-md-center">
      <Col xs={12}  className="mb-1">
<Footer/>
      </Col>
      </Row>
    </>
  );
};
