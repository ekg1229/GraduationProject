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
import Footer from "../components/Navbar/Footer";

import StatChart from "../components/Stat";
import Result_2 from "../components/Result_2";

import {Helmet} from'react-helmet'
import '../../App.css'

import ReactPlayer from "react-player";

//사용 통계 페이지
export default () => {
  return (
    <div className="App" style={{background: "#E0F2FE",}}>
    <Helmet>
      <title>척추요정 사용 통계 페이지</title>
    </Helmet>

      {/*Nav 영역*/}
      <Row className="justify-content-md-center">
        <Col xs={12}  className="mb-1">
          <Navbarss/>
        </Col>
      </Row>

      {/*Nav 밑에 여백*/}
      
      <Row xs={1} style={{height: "15vh", fontSize: "2.9rem", textAlign:"center", alignItems: "center", justifyContent: "center", margin: "0 auto", color: "black"}}> <b> 사용통계 </b> 
      </Row>

      <Col xs={12} xl={12} className="mb-4" >
        <Row>
        <Col xs={12} xl={1} className="mb-4" ></Col>
      
        {/*사용통계 영역*/}
        <Col xs={12} xl={1} className="mb-4" style={{width: "100vh", height: "55vh", background: '#F1F6F5', borderRadius: '15px', alignItems: "center", justifyContent: "center", margin: "0 auto",}}>
        <br/><StatChart/>
        {/* <Col xs={12} xl={10} className="mb-4" style={{position:"realative", width:"1000px", height:"500px", margin: "0 auto"}}>
          <StatChart/>
        </Col> */}
        {/* <div className="result" style={{width:"1000px", height:"320px", margin: "0 auto", marginTop: "10px"}}>
          <Result_2/>
        </div> */}
        </Col>

        <Col xs={12} xl={1} className="mb-4" ></Col>

        </Row>
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


/*
  function usePreventLeave() {
    function listener(e) {
      e.preventDefault();
      e.returnValue = '';
    }
  
    function enablePrevent() {
      window.addEventListener('beforeunload', listener)
    }
  
    function disablePrevent() {
      window.removeEventListener('beforeunload', listener)
    }
  
    return {enablePrevent, disablePrevent}
  }
*/