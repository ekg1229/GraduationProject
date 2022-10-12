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

//사용 통계 페이지
export default () => {
  return (
<>
<Row className="justify-content-md-center">
      <Col xs={12}  className="mb-1">
<Navbarss/>
      </Col>
      </Row>
      
      <div className="chart" style={{width:"1000px", height:"500px", margin: "0 auto"}}>
        <StatChart/>
      </div>
      <div className="result" style={{width:"1000px", height:"320px", margin: "0 auto", marginTop: "10px"}}>
        <Result_2/>
      </div>

      <Row className="justify-content-md-center">
      <Col xs={12}  className="mb-1">
<Footer/>
      </Col>
      </Row>
    </>
  );
};