
import React from "react";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

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

        axios.post('/api/auth/register', {
          //axios body에 보낼 데이터
          email: id,
          password: password,
          imei: imei,
          name: name,
          age: age
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
          if(res.data.state===true){

            console.log("response success")
            //go to main login page
            document.getElementById("alert3").style.display="block"
            window.scrollTo(0,0)
            setTimeout(()=>window.location.href = "/login", 5000)
          }
          else if(res.errors===null){
            console.log("Null exception")
            document.getElementById("alert2").style.display="block"
            window.scrollTo(0,0)
          setTimeout(()=>window.location.href = "/register", 5000)
            
          }
          else if(res.errors===''){
            console.log('some error exception')
            document.getElementById("alert2").style.display="block"
            window.scrollTo(0,0)
          setTimeout(()=>window.location.href = "/register", 5000)
            
          }
          else{
            console.log("exception")
            document.getElementById("alert2").style.display="block"
            window.scrollTo(0,0)
          setTimeout(()=>window.location.href = "/register", 5000)
            
          }
        })
        .catch(function (err){
          console.log(err)
          document.getElementById("alert2").style.display="block"
          window.scrollTo(0,0)
          setTimeout(()=>window.location.href = "/register", 5000)
        })
      
    }


    function confirm1() { //confirm password and repassword
      var p1 = document.getElementById('Password').value;
      var p2 = document.getElementById('rePassword').value;
      var p3 = document.getElementById('imei').value;
    
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
        if(document.getElementById('imei').readOnly===true){ //imei 입력창이 잠금되었다면
          document.getElementById("signup").disabled = false; 
        }//IMEI입력창이 비활성화 되었다면 회원가입버튼활성화(비밀번호 검증과 imei검증이 끝났으므로)
    
        document.getElementById("CheckTrue").style.display="block" //result of confirm print
        document.getElementById("CheckFalse").style.display="none"
        document.getElementById("Password").readOnly= true; //비밀번호 입력 수정 불가
        document.getElementById("rePassword").readOnly= true; //비밀번호 재입력 수정 불가
      }
      return <confirm1/>
    }
    



    function confirm2() { //confirm imei within server DB
      var p3 = document.getElementById('imei').value;
      //p3(imei)-->axios code-->server-->response
      var cfp3 = new Boolean(false)


      axios.post('/api/auth/imei', {
        //axios body에 보낼 데이터
        imei: imei,
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
        console.log(res.data)
        console.log(typeof(res.data))
        if(res.data.state==true){
          //link to dashboard
          console.log("response success")
          cfp3=true
          console.log(cfp3, "무슨값?")

        
        }
        else if(res.errors===null){
          console.log("Null exception")
          
        }
        else if(res.errors===''){
          console.log('some error exception')
          
        }
        else{
          console.log("exception")
          
        }
      })
      .then(()=>{
        if(p3===''){ //null input
          document.getElementById("signup").disabled = true;
        }
        else if(cfp3==false) { //'ll fix that later
          //alert("유효하지 않은 IMEI입니다");
          console.log(cfp3, "유효하지 않을 때")
          document.getElementById("signup").disabled = true;
          document.getElementById("CheckTrue2").style.display="none"
          document.getElementById("CheckFalse2").style.display="block"
          document.getElementById("imei").readOnly= false;
      
          
        } else if(cfp3==true){ //correct imei
          //alert("유효한 IMEI입니다");
          console.log(cfp3, "유효함")
          if(document.getElementById('Password').readOnly===true){
          document.getElementById("signup").disabled = false;}
          document.getElementById("CheckTrue2").style.display="block"
          document.getElementById("CheckFalse2").style.display="none"
          document.getElementById("confirmimei").disabled=true
          document.getElementById("imei").readOnly= true;
        }



      })
      .catch(function (err){
        console.log(err)
        
      })

    
    
      return <confirm2/>

    
    
    }


  return (
    


    <main>
            <Helmet>
      <title>척추요정 회원가입</title>
    </Helmet>

    <div class="alert alert-warning alert-dismissible fade show" role="alert" id="alert2" style={{display: 'none'}}>
  <strong>회원가입 실패</strong> &nbsp; &nbsp; &nbsp; &nbsp;오류가 발생했습니다.
</div>
<div class="alert alert-success alert-dismissible fade show" role="alert" id="alert3" style={{display: 'none'}}>
  <strong>회원가입 성공!</strong> &nbsp; &nbsp; &nbsp; &nbsp;5초 후에 로그인 화면으로 돌아갑니다.
  </div>


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
                  <h3 className="mb-0">회원가입 페이지</h3>
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
                    <Form.Label>비밀번호</Form.Label>
                    
                    <div class="form-floating">
                      <input type="Password" class="form-control was-validate" id="Password" placeholder="Password" name="pwd" required maxlength="32" pattern="[0-9a-zA-Z]{8,}$" title="비밀번호는 8자 이상의 영문 대소문자와 숫자로 이루어질 수 있습니다." onChange={handleInputPw}/>
                      <label for="floatingPassword" style={{color: "#BDBDBD"}} >8자 이상의 영문 대소문자, 숫자로 이루어집니다.</label>
                      </div>
                  </Form.Group>




                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>비밀번호 확인</Form.Label>
                     
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







                  <Form.Group id="confirmimei" className="mb-4">
                    <Form.Label>IMEI</Form.Label>
                    
                    <div class="form-floating">
                      <input type="text" class="form-control was-validate" id="imei" placeholder="Password" name="imei" required maxlength="10" pattern="^[0-9a-zA-Z]{10}" title="IMEI는 10자의 숫자, 영문 대소문자로 이루어집니다." onChange={handleInputImei} readOnly={false}/>
                      <label for="floatingPassword" style={{color: "#BDBDBD"}}>IMEI를 입력해주세요</label>
                      <div class="valid-feedback" id="CheckTrue2">
          	          유효한 IMEI입니다.
                      </div>
                      <div class="invalid-feedback" id="CheckFalse2">
                      유효하지 않은 IMEI입니다.
                      </div>
                      </div>

                      <h2></h2>
                      <div><Button variant="primary" type="button" onClick={confirm2} id='confi2'>IMEI 확인</Button>
                      </div>
                  </Form.Group>






                  <Form.Group id="Name" className="mb-4">
                    <Form.Label>이름</Form.Label>
                    
                    <div class="form-floating">
                      <input type="text" class="form-control was-validate" id="floatingPassword" placeholder="Password" name="name" required maxlength="8" pattern="[ㄱ-힣]{1,8}" title="최대 8자까지의 한글만 입력가능합니다." onChange={handleInputName}/>
                      <label for="floatingInput" style={{color: "#BDBDBD"}}>이름을 입력해주세요</label>
                      </div>

                  </Form.Group>

                  <Form.Group id="Age" className="mb-4">
                    <Form.Label>나이</Form.Label>
                    
                    <div class="form-floating">
                      <input type="text" class="form-control was-validate" id="floatingPassword" placeholder="Password" name="age" required maxlength="3" pattern="^[0-9]{0,3}" title="나이는 숫자로 입력하세요." onChange={handleInputAge}/>
                      <label for="floatingPassword" style={{color: "#BDBDBD"}}>나이를 입력해주세요</label>
                      </div>

                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100" id="signup" disabled={true}>
                    회원가입
                  </Button>
                </Form>

                
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    이미 회원이신가요?
                    <Link to="/login" className="fw-bold">
                      {` 로그인 페이지로 이동 `}
                    </Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <h2></h2>
            <h2></h2>
            <h2></h2>
            <h2></h2>
            <h2></h2>
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

