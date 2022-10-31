
import React from "react";
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import Navbarss from "../components/Navbar/Navbarss";
import Footer from "../components/Navbar/Footer";

import {Helmet} from'react-helmet'
import ReactPlayer from "react-player";
import '../../App.css'

//서비스 정보 페이지
export default () => {
  return (
    <div className="App">
          <Helmet>
      <title>척추요정 서비스 정보 페이지</title>
    </Helmet>
     <Row className="justify-content-md-center">
      <Col xs={12}  className="mb-1">
<Navbarss/>
      </Col>
      </Row>


      <Row className="justify-content-md-center">
        
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="서비스 버전"
            title="v1.2"
            period="Feb 1 - Apr 1"
            percentage={18.2}
            icon={faCheckCircle}
            iconColor="shape-secondary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="마지막 업데이트 일자"
            title="2022.10.29.(토)"
            period="Feb 1 - Apr 1"
            percentage={28.4}
            icon={faCheckCircle}
            iconColor="shape-tertiary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
        <CounterWidget
            category="서비스 상태"
            title="정상 작동중"
            period="Feb 1 - Apr 1"
            percentage={28.4}
            icon={faCheckCircle}
            iconColor="shape-tertiary"
          />
        </Col>
      </Row>


      <Row className="justify-content-md-center">

      <Col xs={12} sm={6} xl={4} className="mb-4">
      <ReactPlayer
        className="player"
        url={"https://www.youtube.com/watch?v=Z1Fgi5IP92E"}
        width="580px"
        heigth="470px"
        playing={false}
        muted={true}
        controls={true}
        style={{marginBottom: '20px'}}
      />
      </Col>

      <Col xs={12} sm={6} xl={4} className="mb-4">
            <ReactPlayer
        className="player"
        url={"https://www.youtube.com/watch?v=hUB0dBxot_U"}
        width="580px"
        heigth="470px"
        playing={false}
        muted={true}
        controls={true}
        style={{marginBottom: '20px'}}
      />
            </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
            <ReactPlayer
        className="player"
        url={"https://www.youtube.com/watch?v=Scgj6O9Ch4M"}
        width="580px"
        heigth="470px"
        playing={false}
        muted={true}
        controls={true}
        style={{marginBottom: '20px'}}
      />
            </Col>


      </Row>
      
      <Row className="justify-content-md-center">
        
        <Col xs={12} sm={6} xl={4} className="mb-4">
          
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
        </Col>
      </Row>



      <Row>
        <Footer/>
      </Row>
    </div>
  );
};
