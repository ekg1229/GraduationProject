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
import Result_1 from "../components/Result_1";
import {Helmet} from'react-helmet'
import LightError from "../components/Light_error";


//신호등 페이지
export default () => {
  return (
    <>
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
      <Row xs={1} style={{height: "12vh"}}></Row>

      {/*데이터 없을 때 음영 처리*/}
      <LightError/>
      
      {/*척추 신호등 영역*/}
      <Col xs={12} xl={10} className="mb-4" style={{width: "auto", height: "auto", margin: "0 auto", background: "#E0F2FE",}}>
        <div className="mb-4" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "50%", height: "350px", margin: "0 auto"}}>
          <div className="mb-4" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "1000px", height: "300px", margin: "0 auto", borderRadius: "500px", background: "black", boxShadow: "5px 5px"}}>
            <Light/>
          </div>
        </div>
        <div className="result" style={{display: "flex", justifyContent: "center", alignItems: "center", width:"1000px", height:"250px", margin: "0 auto"}}>
          <Result_1/>
        </div>
      </Col>

      {/*Footer 영역*/}
      <Row className="justify-content-md-center">
        <Col xs={12}  className="mb-1">
    <Footer/>
        </Col>
      </Row>
    </>
  );
};