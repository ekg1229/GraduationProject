
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';

import axios from 'axios';




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

        axios.post('/api/auth/login', {
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
            //link to dashboard
            console.log("response success")
            window.location.href="/dashboard"
          }
      
          //axios get boolean status as json 
          /*if(res=="200"){
          await.axios.get('/api/login', {
          })}*/
        })
        .catch(function (err){
          console.log(err)
        })
      
    }




  return (
    <main>
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
