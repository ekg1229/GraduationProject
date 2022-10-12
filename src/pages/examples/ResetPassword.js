
import React from "react";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { useState } from "react";
import { useEffect } from "react";

import axios from 'axios';
import { alphaNumerate } from "chartist";

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

        axios.post('/api/auth/update', {
          //axios body에 보낼 데이터
          id: id,
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
          if(res.state==='true'){
            console.log("response success")
            //go to main login page
            window.location.href="/login"
          }
        })
        .catch(function (err){
          console.log(err)
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
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        
        <Container>
         
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
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
                  <Form.Group id="email" className="mb-4" >
                    <Form.Label>아이디</Form.Label>
                    <div className="form-floating mb-3">
                    <input type="email" class="form-control was-validate" id="floatingInput" placeholder="name@example.com" name="name" required maxlength="20" pattern="^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$" onChange={handleInputId}/>
                    
                    <label for="floatingInput" style={{color: "#BDBDBD"}}>이메일 주소를 입력해주세요</label>
                    <div className="valid-feedback">
          	        올바른 입력입니다.
                    </div>
                    <div className="invalid-feedback">
                    이메일 형식으로 입력하세요.
                    </div>
                    </div>

                  </Form.Group>
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
                      <div><Button variant="primary" type="submit" id="confi" onClick={confirm1} onSubmit={handleInputPw}>비밀번호 확인</Button>
                      </div>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100" id="signup" disabled={true}>
                    회원가입
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

