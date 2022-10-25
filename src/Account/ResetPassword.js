
import React from "react";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { useState } from "react";
import { useEffect } from "react";

import {Helmet} from'react-helmet'
import axios from 'axios';


export default () => {

  const [id, setInputId] = useState('')
  const [password, setInputPw] = useState('')
  const [imei, setInputImei] = useState('')
  const [name, setInputName] = useState('')
  const [age, setInputAge] = useState('')
 
	// input data의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const handleInputImei = (e) => {
      setInputImei(e.target.value)
    }

  const handleInputName = (e) => {
    setInputName(e.target.value)
    }

  const handleInputAge = (e) => {
  setInputAge(e.target.value)
  }
 


    function handleSubmit(e) {
      e.preventDefault(); //submit default 제출 막음
      console.log('You clicked submit.');
      
    }
 
    function useEffect(){
      console.log('useEffect execution.');

        axios.put('/api/auth/password', {
          //axios body에 보낼 데이터
          password: password
        },
        {
          //axios header
          headers:{
            'Content-Type': 'application/json',
            //'Authorization' : `Bearer ${accessToken}`
          }
        })
        .then((res) => {
          console.log(res)
          if(res.data.state==true){
            //link to dashboard
            console.log("response success")
            document.getElementById("alert4").style.display="block"
            window.scrollTo(0,0)
            setTimeout(()=>window.location.href = "/login", 5000)
          }
          else if(res.errors===null){
            console.log("Null exception")
            document.getElementById("alert5").style.display="block"
            window.scrollTo(0,0)
            setTimeout(()=>window.location.href = "/profile", 5000)
            
          }
          else if(res.errors===''){
            console.log('some error exception')
            document.getElementById("alert5").style.display="block"
            window.scrollTo(0,0)
            setTimeout(()=>window.location.href = "/profile", 5000)
            
          }
          else{
            console.log("exception")
            document.getElementById("alert5").style.display="block"
            window.scrollTo(0,0)
            //setTimeout(()=>window.location.href = "/profile", 5000)
            
          }
        })
        .catch(function (err){
          console.log(err)
          window.scrollTo(0,0)
          window.location.reload();
          
        })
      
    }


    function confirm1() { //confirm password and repassword
      var p1 = document.getElementById('Password').value;
      var p2 = document.getElementById('rePassword').value;
    
      if(p1===''||p2===''){ //null input
        document.getElementById("signup").disabled = true;
      }
      else if( p1 !== p2 ) { //not correct
        //alert("비밀번호가 일치 하지 않습니다");
        document.getElementById("signup").disabled = true; //제출 금지
        document.getElementById("CheckTrue").style.display="none" //result of confirm print
        document.getElementById("CheckFalse").style.display="block"
        document.getElementById("Password").readOnly= false;
        document.getElementById("rePassword").readOnly= false;
      } else{ 
        //alert("비밀번호가 일치합니다");
        document.getElementById("signup").disabled = false;
        document.getElementById("CheckTrue").style.display="block" //result of confirm print
        document.getElementById("CheckFalse").style.display="none"
        document.getElementById("Password").readOnly= true; //비밀번호 입력 수정 불가
        document.getElementById("rePassword").readOnly= true; //비밀번호 재입력 수정 불가
      }
      return <confirm1/>
    }

  return (
    


    <main>
            <Helmet>
      <title>척추요정 개인정보 수정</title>
    </Helmet>

    <div class="alert alert-danger alert-dismissible fade show" role="alert" id="alert4" style={{display: 'none'}}>
  <strong>&nbsp; 계정정보 수정 완료!</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 정보수정이 완료되었습니다. 5초뒤 메인화면으로 이동합니다.
</div>
<div class="alert alert-warning alert-dismissible fade show" role="alert" id="alert5" style={{display: 'none'}}>
  <strong>계정정보 수정 실패!</strong> &nbsp; &nbsp; &nbsp; &nbsp; 5초 후에 새로고침합니다.
  </div>


      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        
        <Container>
          <Row style={{textAlign: 'center'}}>
        <Card.Link as={Link} to={Routes.DashboardOverview.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2"/> 대시보드 페이지로 돌아가기
            </Card.Link>
         </Row>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fbeta.thewiki.kr%2Fw%2F%25EA%25B0%2580%25EC%25B2%259C%25EB%258C%2580%25ED%2595%2599%25EA%25B5%2590&psig=AOvVaw29b0cyAReP89Vu6yJQJQPI&ust=1666577054080000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLDB3ryh9foCFQAAAAAdAAAAABAG")` }}>
            <h2></h2>
            <h2></h2>
            <h2></h2>
            <h2></h2>
            <h2></h2>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">비밀번호 변경</h3>
                </div>
                <Form className="mt-4" onSubmit={(event)=>{handleSubmit(event); useEffect();}}>

                  <Form.Group id="password" className="mb-4">
                    <Form.Label>변경할 비밀번호</Form.Label>
                    
                    <div class="form-floating">
                      <input type="Password" class="form-control was-validate" id="Password" placeholder="Password" name="pwd" required maxlength="32" pattern="[0-9a-zA-Z]{8,}$" title="비밀번호는 8자 이상의 영문 대소문자와 숫자로 이루어질 수 있습니다." onChange={handleInputId}/>
                      <label for="floatingPassword" style={{color: "#BDBDBD"}} >8자 이상의 영문 대소문자, 숫자로 이루어집니다.</label>
                      </div>
                  </Form.Group>




                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>변경할 비밀번호 확인</Form.Label>
                     
                    <div class="form-floating">
                      <input type="password" class="form-control was-validate" id="rePassword" placeholder="Password" name="pwd" required maxlength="32" pattern="[0-9a-zA-Z]{8,}$" onChange={handleInputPw}/>
                      <label for="floatingPassword" style={{color: "#BDBDBD"}}>비밀번호를 재입력해주세요</label>
                      <div class="valid-feedback" id="CheckTrue">
          	          비밀번호가 일치합니다.
                      </div>
                      <div class="invalid-feedback" id="CheckFalse">
                      비밀번호가 일치하지 않습니다.
                      </div>
                      </div>

                      <h2></h2>
                      <div><Button variant="primary" type="button" id="confi" onClick={confirm1}>비밀번호 확인</Button>
                      </div>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100" id="signup" onSubmit={handleInputPw} disabled={true}>
                    비밀번호 변경
                  </Button>
                </Form>
                
                

              </div>
            </Col>
            <h2></h2>
            <h2></h2>
            <h2></h2>
            <h2></h2>
            <h2></h2>
          </Row>
        </Container>
      </section>

      <script type="confirm1/javascript">
        </script>
        <script type="confirm2/javascript">
        </script>


    </main>






  );
};





/* 


    <head>(function() {
      "use strict";
      window.addEventListener("load", function() {
        var form = document.getElementById("needs-validation");
        form.addEventListener("submit", function(event) {
          if (form.checkValidity() == false) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add("was-validated");
          }
          
          // 서버 연동 처리
        }, false);
      }, false);
    }());
    </head>




*/

