import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLink2
} from './NavbarElements';

const Navbarss = () => {
  return (
    <>
      <Nav>
        <NavLink2 to='/dashboard'>
          <img src={require('/home/front/ReactProject3/src/assets/img/gachonlogo.png')} width='70' height='70' alt='logo' style={{marginTop: '4px', marginLeft: '5px'}}/>
          <h1 style={{color: 'white', marginTop: '14px', marginLeft: '14px'}} >척추 지킴이 척추 요정</h1>
        </NavLink2>
       
        <NavMenu>
          <NavLink to='/dashboard' activeStyle>
            대시보드
          </NavLink>
          <NavLink to='/liveState' activeStyle>
            실시간 척추 신호등
          </NavLink>
          <NavLink to='/stat' activeStyle>
            사용 통계
          </NavLink>
          <NavLink to='/help' activeStyle>
            서비스 정보
          </NavLink>
          <NavLink to='/profile' activeStyle>
            계정정보 수정
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        
      </Nav>
      <h1></h1>

    </>
  );
};

export default Navbarss;

/*
<NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>*/