import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavMenu2,
  NavBtn,
  NavBtnLink,
  NavLink2
} from './NavbarElements';

const Navbarss = () => {

  const removeUser = async (id) => {
    try {
      const res = await axios.delete('/api/auth/logout')
      console.log('Item successfully deleted.')

    
      alert("성공적으로 로그아웃 했습니다.")

      sessionStorage.removeItem("isLogin")
      window.location.href = "/login"
      
      //window.location.reload();
    


    } catch (error) {
      alert(error)
    }}
    

  return (
    <>
      <Nav style={{height: "7vh"}}>
        <NavMenu>
        <NavLink2 to='/dashboard'>
          <picture>
          <img src={require('/home/front/ReactProject3/src/assets/img/gachonlogo.png')} alt='logo' width='55px' height='55px'/>
          </picture>
          척추 지킴이 척추 요정
        </NavLink2>
        </NavMenu>
        
        <NavMenu style={{marginRight: "1rem"}}>
          <NavLink to='/dashboard' activeStyle>
            대시보드
          </NavLink>
          <NavLink to='/liveState' activeStyle>
            실시간 척추 신호등
          </NavLink>
          <NavLink to='/stat' activeStyle>
            사용통계
          </NavLink>
          <NavLink to='/profile' activeStyle>
            계정정보수정
          </NavLink>
          <NavLink to='/login' onClick={removeUser} activeStyle>
            로그아웃
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
        
        
      </Nav>

    </>
  );
};


export default Navbarss;

/*
<NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>*/