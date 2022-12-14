import React, { Component } from 'react';

class JoinForm extends Component {
  state = {
    name: '',
    firstPassword: '',
    lastPassword: '',
    checkPassword: '๐ํจ์ค์๋ ์๋ ฅ๐',
  };
  //input onChange ์ด๋ฒคํธ
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // ํ๋ผ๋ฏธํฐ๋ก ๋ฐ์ event.target.name์ด name ์๋ ๊ฒฝ์ฐ์๋ง handleCheckํจ์ ์คํ
    // setTimeout์ผ๋ก ๋๋ ์ด๋ฅผ ์ค ์ด์ ๋ ๋๋ ์ด๋ฅผ ์ฃผ์ง ์์์ ๊ฒฝ์ฐ setState ๋ณ๊ฒฝ๋ ๊ฐ์ด handleCheck์์ ๋ฐ๋ก ๋ฐ์๋์ง ์์
    if (e.target.name !== 'name') {
      setTimeout(this.handleCheck, 100);
    }
  };
  //๋น๋ฐ๋ฒํธ ์ฒดํฌ
  handleCheck = () => {
    const { firstPassword, lastPassword } = this.state;
    // ๋น๋ฐ๋ฒํธ ๋ฌด์๋ ฅ ์ํ์ผ ๋์ ๋ ์ค์ ํ๋์ ๊ฐ์ด ์๋ ฅ ์ํ๊ฐ ์๋๋
    if (firstPassword.length < 1 || lastPassword.length < 1) {
      this.setState({
        checkPassword: '๐ํจ์ค์๋ ์๋ ฅ๐',
      });
      // ๋น๋ฐ๋ฒํธ๊ฐ ๊ฐ๋ค๋ฉด ์ผ์น
    } else if (firstPassword === lastPassword) {
      this.setState({
        checkPassword: 'โ์ผ์น โ',
      });
      // ๋น๋ฐ๋ฒํธ๊ฐ ๊ฐ์ง ์๋ค๋ฉด ๋ถ์ผ์น
    } else {
      this.setState({
        checkPassword: 'โ๋ถ์ผ์น โ',
      });
    }
  };
  render() {
    const { name, firstPassword, lastPassword, checkPassword } = this.state;
    return (
      <div>
        <form className="joinForm">
          <input name="name" onChange={this.handleChange} value={name} placeholder="์ด๋ฆ " />
          <input
            name="firstPassword"
            onChange={this.handleChange}
            value={firstPassword}
            placeholder="๋น๋ฐ๋ฒํธ"
          />
          <input
            name="lastPassword"
            onChange={this.handleChange}
            value={lastPassword}
            placeholder="๋น๋ฐ๋ฒํธ ํ์ธ"
          />
        </form>
        <div className="showText">
          <span>์ด๋ฆ : {name} </span>
          <span>๋น๋ฐ๋ฒํธ : {firstPassword}</span>
          <span>๋น๋ฐ๋ฒํธํ์ธ : {lastPassword}</span>
          <span>์ผ์น์ฌ๋ถ : {checkPassword}</span>
        </div>
      </div>
    );
  }
}

export default JoinForm;