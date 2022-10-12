import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup, Nav, Navbar } from '@themesberg/react-bootstrap';

import { CounterWidget,  SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { Link } from "react-router-dom";
import Gachon from "../../assets/img/gachonlogo.png"
import Navbarss from "../components/Navbar/Navbarss";
import Footer from "../../components/Footer";



// 대시보드 첫 페이지


export default () => {
  return (
    <>

<Row className="justify-content-md-center">
      <Col xs={12}  className="mb-1">
<Navbarss/>
      </Col>
      </Row>
      


      
    <h1>대시보드 페이지</h1>
    <h1>대시보드 페이지</h1>
    <h1>대시보드 페이지</h1>
    <h1>대시보드 페이지</h1>
    <h1>대시보드 페이지</h1>
    <h1>대시보드 페이지</h1>
    <h1>대시보드 페이지</h1>
    <h1>대시보드 페이지</h1>
    <h1>대시보드 페이지</h1>
    <h1>대시보드 페이지</h1>
    <h1>대시보드 페이지</h1>
    <h2>이 단락 삭제 후 내용채워주세요</h2>








      <Row className="justify-content-md-center">
      <Col xs={12}  className="mb-1">
<Footer/>
      </Col>
      </Row>
    </>
  );
};
