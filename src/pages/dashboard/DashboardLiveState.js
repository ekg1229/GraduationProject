import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";
import { Link } from "react-router-dom";
import Gachon from "../../assets/img/gachonlogo.png"

import TrafficLight from 'react-trafficlight'
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
      <Row xs={1} style={{height: "12vh", fontSize: "2.9rem", textAlign:"center", alignItems: "center", justifyContent: "center", margin: "0 auto", color: "black"}}> <b> 당신의 척추 건강 신호등 </b> </Row>
      
      {/*척추 신호등 영역*/}
      <Col xs={12} xl={10} className="mb-4" style={{width: "auto", height: "auto", margin: "0 auto"}}>
          <Light/>
      </Col>

      {/*Footer 영역*/}
      <Row className="justify-content-md-center">
        <Col xs={12}  className="mb-1" >
    <Footer/>
        </Col>
      </Row>
    </div>
  );
};