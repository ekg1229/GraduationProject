import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";
import { Link } from "react-router-dom";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import Gachon from "../../assets/img/gachonlogo.png"
import Navbarss from "../components/Navbar/Navbarss";
import Footer from "../../components/Footer";

import StatChart from "../charts/Stat";
import Result_2 from "../components/Result_2";

import {Helmet} from'react-helmet'

//사용 통계 페이지
export default () => {
  return (
<>
<Helmet>
      <title>척추요정 사용 통계 페이지</title>
    </Helmet>
      <Row className="justify-content-md-center">
      <Col xs={12}  className="mb-1">
<Navbarss/>
      </Col>
      </Row>


      <Col xs={12} xl={12} className="mb-4" >
        <Row>


        <Col xs={12} xl={1} className="mb-4" ></Col>


      <Col xs={12} xl={10} className="mb-4" style={{background: 'white'}}>
      <h2></h2>
      <div className="chart" style={{position:"realative", width:"1000px", height:"500px", margin: "0 auto"}}>
        <StatChart/>
      </div>
      <div className="result" style={{width:"1000px", height:"320px", margin: "0 auto", marginTop: "10px"}}>
        <Result_2/>
      </div>
      </Col>

      <Col xs={12} xl={1} className="mb-4" ></Col>


      </Row>
      </Col>


      <Row className="justify-content-md-center">
      <Col xs={12}  className="mb-1">
<Footer/>
      </Col>
      </Row>
    </>
  );
};