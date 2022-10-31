import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import Gachon from "../../assets/img/gachonlogo.png"
import Navbarss from "../components/Navbar/Navbarss";
import Footer from "../components/Navbar/Footer";

import StatChart from "../components/Stat";
import StatChart2 from "../components/Stat2";
import Result_2 from "../components/Result_2";

import {Helmet} from'react-helmet'
import '../../App.css'
import './DashboardStat.css';

//사용 통계 페이지
export default () => {
  return (
    <div className="App" style={{background: "#E0F2FE"}}>
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
      <div className="tab-area" style={{marginTop: "2.9rem", marginBottom: "2.9rem"}}>
          <input type="radio" name="tabs" id="tab1" checked/>
          <label for="tab1">사용량 통계</label>

          <input type="radio" name="tabs" id="tab2"/>
          <label for="tab2" style={{marginLeft: "1rem"}}>사용 분석</label>

        <br/>

        <div id="content1" className="tab-content stat1">
            {/*사용통계1 영역*/}
            <Col xs={12} xl={1} className="mb-4" style={{width: "60vw", height: "70vh", alignItems: "center", justifyContent: "center", margin: "0 auto", background: '#F1F6F5', borderRadius: '15px',}}>
              <br/><StatChart/>
            </Col>
        </div>
        
        <div id="content2" class="tab-content stat2">
          <Col xs={12} xl={12} className="mb-4" >
            <Row>
            <Col xs={12} xl={1} className="mb-4" ></Col>
          
            {/*사용통계2 영역*/}
            <Col xs={12} xl={1} className="mb-4" style={{width: "60vw", height: "70vh", alignItems: "center", justifyContent: "center", margin: "0 auto", background: '#F1F6F5', borderRadius: '15px',}}>
              <br/><StatChart2/>
            </Col>

            <Col xs={12} xl={1} className="mb-4" ></Col>

            </Row>
          </Col>
        </div>

      </div>

      {/*Footer 영역*/}
      <Row className="justify-content-md-center" style={{height: "30vh", background: "#E0F2FE",}}>
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