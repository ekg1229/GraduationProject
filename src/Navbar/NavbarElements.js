import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components'

export const Nav = styled.nav`
  background: #084B8A;
  width: 100vh
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0px;
  z-index: 10;
  


  @media screen and (max-width: 768px) {
    background: #084B8A;
    
    height: 340px;
    flex-direction: column;
    

  }

  /* Third Nav */
  /* justify-content: flex-start; */
`;
//0.5rem calc((100vw - 1000px) / 2)
export const NavLink = styled(Link)`
  color: #fff;
  font-size: 1vw;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin-right: 10px;
  height: 100%;
  cursor: pointer;
  justify-content: flex-end;
  &.active {
    color: #15cdfc;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    color: #fff;
    font-size: 1vw;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    margin-right: 10px;
    height: 100%;
    cursor: pointer;
  }

`;

export const NavLink2 = styled(Link)`
color: #fff;
font-size: 2.3vw;
font-color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 3rem;
margin-right: 10px;
height: 100%;
cursor: pointer;
  &.active {
    color: #15cdfc;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    color: #fff;
    font-size: 2.3vw;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    margin-right: 10px;
    height: 100%;
    cursor: pointer;

    justify-content: space-between;
  }
`;

export const Dropdown = styled(Link)`
  color: #fff;
  font-size: 1vw;
  display: flex;
  align-items: left;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1vw;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  font-size: 0.3vw;
  align-items: center;
  margin-right: -24px;
  

   
  marginTop: '14px';
  marginLeft: '14px';
  display: 'flex';
  justifyContent: 'center';
  maxWidth: '1170px';
  margin: 'auto';
  height: 'auto';
  minHeight: '100vh';
  
  minHeight: '100vh';


  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    color: #fff;
    font-size: 2vw;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    margin-right: 10px;
    height: 100%;
    flex-direction: column;
  }
`;

export const NavMenu2 = styled.div`
  display: flex;
  font-size: 0.3vw;
  align-items: center;
  margin-right: -24px;
  

   
  marginTop: '14px';
  marginLeft: '14px';
  justifyContent: 'center';
  maxWidth: '1170px';
  margin: 'auto';
  height: 'auto';
  minHeight: '100vh';
  
  minHeight: '100vh';


  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    color: #fff;
    font-size: 2vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 0px;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    flex-direction: column;
  }
`;



export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

