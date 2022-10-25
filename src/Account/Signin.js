import React from "react";
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { useState, useEffect, useHistory} from "react";

import {Helmet} from'react-helmet'
import axios from 'axios';
import DashboardOverview from "../dashboard/DashboardOverview";




export default () => {

  const [id, setInputId] = useState('')
  const [password, setInputPw] = useState('')
  
 
	// input data의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('Click login!')
        
    }



    function handleSubmit(e) {
      e.preventDefault(); //submit default 제출 막음
      console.log('You clicked submit.');

      /*if(id===''||password===''){
        alert("아이디와 비밀번호를 모두 입력해주세요")
      }*/
      
    }
 
    function useEffect(){
      console.log('useEffect execution.');
   
      /*const history = useHistory();
      const historyPush=()=> {
        history.push('/dashboard');
        }*/
        

      axios.post('/api/auth/login', {
        //axios body에 보낼 데이터
        email: id,
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
        console.log(res.data)
        console.log(typeof(res.data))
        if(res.data.state==true){
          //link to dashboard
          //console.log("response success")
          // historyPush()
          window.location.href = "/dashboard";

          
          //{{<Route path="/dashboard" exact component={DashboardOverview}/>}}
          //return(<DashboardOverview id={{id}}/>);
        }
        else if(res.data.errors==null){
          //console.log("Null exception")
          document.getElementById("alert1").style.display="block"
          setTimeout(()=>window.location.href = "/login", 5000)
        }
        else if(res.data.errors==''){
          //console.log('some error exception')
          document.getElementById("alert1").style.display="block"
          setTimeout(()=>window.location.href = "/login", 5000)
        }
        else{
          //console.log("exception")
          document.getElementById("alert1").style.display="block"
          setTimeout(()=>window.location.href = "/login", 5000)
        }
    
        //axios get boolean status as json 
        /*if(res=="200"){
        await.axios.get('/api/login', {
        })}*/
      })
      .catch(function (err){
        console.log(err)
        // alert("로그인 실패!")
        document.getElementById("alert1").style.display="block"
        setTimeout(()=>window.location.href = "/login", 5000)
      })
      
    }







  return (


    <main>
      <Helmet>
      <div id="liveAlertPlaceholder"></div>
      <title>척추요정 로그인</title>
    </Helmet>


    <div class="alert alert-danger alert-dismissible fade show" role="alert" id="alert1" style={{display: 'none'}}>
  <strong>&nbsp; 로그인 실패!</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 아이디 혹은 비밀번호가 잘못되었습니다. 회원이 아니시라면 회원가입을 해주세요.
</div>



      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            
          </p>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">척추 자세교정 로그인</h3>
                </div>
                <Form className="mt-4" type='submit' onSubmit={(event)=>{handleSubmit(event); useEffect();}}>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>아이디</Form.Label>
                    
                    <div className="form-floating mb-3">
                    <input type="email" className="form-control was-validate" id="id" placeholder="name@example.com" name="name" required maxLength="20" pattern="^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$" onChange={handleInputId}/>
                    
                    <label htmlFor="floatingInput" style={{color: "#BDBDBD"}}>이메일 주소를 입력하세요.</label>
                    <div className="valid-feedback">
          	        올바른 입력입니다.
                    </div>
                    <div className="invalid-feedback">
                    이메일 형식으로 입력해주세요.
                    </div>
                    </div>

                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>비밀번호</Form.Label>
                      
                      <div className="form-floating">
                      <input type="password" className="form-control was-validate" id="password" placeholder="Password" name="pwd" required maxLength="32" pattern="[0-9a-zA-Z]{8,}$" title="비밀번호는 8자 이상의 영문 대소문자와 숫자로 이루어질 수 있습니다." onChange={handleInputPw}/>
                      <label htmlFor="floatingPassword" style={{color: "#BDBDBD"}}>비밀번호를 입력하세요</label>
                      <div className="valid-feedback">
          	          올바른 입력입니다.
                      </div>
                      <div className="invalid-feedback">
                      5글자 이상 10글자 이하로 작성해 주세요.
                      </div>
                      </div>


                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      
                      <Card.Link className="small text-end" text-align='center'>비밀번호를 잊으셨나요?</Card.Link>
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    로그인
                  </Button>
                </Form>


               
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    회원이 아니신가요?
                    <Link to="/register" className="fw-bold">
                      {` 회원가입 `}
                    </Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
