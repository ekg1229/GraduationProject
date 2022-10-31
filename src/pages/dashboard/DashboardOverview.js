import React from "react";
import { Col, Row, Button, Dropdown, ButtonGroup, Nav, Navbar } from '@themesberg/react-bootstrap';

import { CounterWidget,  SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import Navbarss from "../components/Navbar/Navbarss";
import Footer from "../components/Navbar/Footer";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";


import {Helmet} from'react-helmet'
import ReactPlayer from "react-player";
import '../../App.css'
import { NavLink2 } from "../components/Navbar/NavbarElements";

// 대시보드 첫 페이지
export default () => {

  /*
  const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
    const enablePrevent = () => {window.addEventListener("beforeunload", listener); localStorage.removeItem("isLogin")}
    const disablePrevent = () =>
      window.removeEventListener("beforeunload", listener);
    return { enablePrevent, disablePrevent };
  };
  */

  return (
    <div className="App" style={{position: 'relative', minHeight: '95vh', background: "#E0F2FE",}}>

    <Helmet>
      <title>척추요정 대시보드 페이지</title>
    </Helmet>

<Row className="justify-content-md-center">
      <Col xs={12}  className="mb-1">
<Navbarss/>
      </Col>
      </Row>

<Row>
  
  {/*타이틀*/}
  <Row xs={1} style={{height: "15vh", fontSize: "2.9rem", textAlign:"center", alignItems: "center", justifyContent: "center", margin: "0 auto", color: "black"}}> <b> 척추 지킴이 척추요정 </b> </Row>

        {/* <div style={{ width: "100%",
        height: "100vh",
        backgroundImage: `url(${main})`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center top",
        backgroundSize: 'cover',
        position: "absolute"
        }}>
        </div> */}

  {/*서비스 정보*/}
  <Row className="justify-content-md-center" style={{display:"flex", alignItems: "center", justifyContent: "center", margin: "0 auto", marginBottom: "2.9rem"}}>
          
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

          <Col xs={12} sm={6} xl={4} className="mb-4" style={{display:"flex", alignItems: "center", justifyContent: "center", margin: "0 auto"}}>
          <ReactPlayer
            className="player"
            url={"https://www.youtube.com/watch?v=Z1Fgi5IP92E"}
            width="580px"
            heigth="470px"
            playing={false}
            muted={true}
            controls={true}
            style={{marginBottom: '20px'}}/>
          </Col>

          <Col xs={12} sm={6} xl={4} className="mb-4" style={{display:"flex", alignItems: "center", justifyContent: "center", margin: "0 auto"}}>
                <ReactPlayer
            className="player"
            url={"https://www.youtube.com/watch?v=hUB0dBxot_U"}
            width="580px"
            heigth="470px"
            playing={false}
            muted={true}
            controls={true}
            style={{marginBottom: '20px'}}/>
          </Col>

            <Col xs={12} sm={6} xl={4} className="mb-4" style={{display:"flex", alignItems: "center", justifyContent: "center", margin: "0 auto"}}>
                <ReactPlayer
            className="player"
            url={"https://www.youtube.com/watch?v=Scgj6O9Ch4M"}
            width="580px"
            heigth="470px"
            playing={false}
            muted={true}
            controls={true}
            style={{marginBottom: '20px'}}/>
          </Col>
  </Row>
      
</Row>
      <Row className="justify-content-md-center">
      <Col xs={12}  className="mb-1">
<Footer/>
      </Col>
      </Row>
    </div>
  );
};

//opacity: "0.3"
/*
<div class="wrapper" style={{position: 'absolute', display: 'flex',
justifyContent: 'center',
alignItems: 'center',
minHeight: '100vh',
top: '50%',
left:'50%'
}}>
          <div class="content" style={{}}></div>
        </div>

*/