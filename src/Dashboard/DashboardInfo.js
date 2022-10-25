
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

import {Helmet} from'react-helmet'
import ReactPlayer from "react-player";

//서비스 정보 페이지


export default () => {
  return (
    <>
          <Helmet>
      <title>척추요정 서비스 정보 페이지</title>
    </Helmet>
     <Row className="justify-content-md-center">
      <Col xs={12}  className="mb-1">
<Navbarss/>
      </Col>
      </Row>


      <Row className="justify-content-md-center">
        
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>
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
            category="Revenue"
            title="$43,594"
            period="Feb 1 - Apr 1"
            percentage={28.4}
            icon={faCheckCircle}
            iconColor="shape-tertiary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget
            title="Traffic Share"
            data={trafficShares} />
        </Col>
      </Row>

      <Col xs={12}  className="mb-1">
      <Row>
      <ReactPlayer
        className="player"
        url={"https://www.youtube.com/watch?v=Z1Fgi5IP92E"}
        width="580px"
        heigth="470px"
        playing={false}
        muted={true}
        controls={true}
      />
            <ReactPlayer
        className="player"
        url={"https://www.youtube.com/watch?v=hUB0dBxot_U"}
        width="580px"
        heigth="470px"
        playing={false}
        muted={true}
        controls={true}
      />
            <ReactPlayer
        className="player"
        url={"https://www.youtube.com/watch?v=Scgj6O9Ch4M"}
        width="580px"
        heigth="470px"
        playing={false}
        muted={true}
        controls={true}
      />
      </Row>
      
      </Col>


      <Row>
        <Footer/>
      </Row>
    </>
  );
};
