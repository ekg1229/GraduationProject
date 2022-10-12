
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
import Footer from "../../components/Footer";

import Light from "../components/Light";
import Result_1 from "../components/Result_1";

//신호등 페이지
export default () => {
  return (
    <>
      <Row className="justify-content-md-center">
      <Col xs={12}  className="mb-1">
<Navbarss/>
      </Col>
      </Row>
      <div style={{display: "flex", alignItems: "center", width: "1000px", height: "300px", margin: "0 auto", borderRadius: "500px", background: "#000000"}}>
        <Light/>
      </div>
      <div className="result" style={{width:"1000px", height:"220px", margin: "0 auto", marginTop: "10px"}}>
        <Result_1/>
      </div>
      <Row>
        <Footer/>
      </Row>
    </>
  );
};
