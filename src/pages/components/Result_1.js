import React from "react";

//오늘의 한 마디 기능
function Result_1(props){
  if(props==="1"){//바른 자세
    return(
      <div style={{width:"1000px", height:"200px", border: "3px solid black", background: "white"}}>
        <div>
          <h3 style={{marginTop: "33px", textAlign:"center"}}>[ 오늘의 한 마디 ]<br/>
          =======================================</h3>
        </div>
        <div style={{marginTop: "10px", textAlign:"center", fontSize: "21px"}}>
          <b>"잘했어요! 이대로 계속 유지해주세요!"</b>
        </div>
      </div>
    );
  }
  else if(props==="2"){//경고 자세
    return(
      <div style={{width:"1000px", height:"200px", border: "3px solid black", background: "white"}}>
        <div>
          <h3 style={{marginTop: "33px", textAlign:"center"}}>[ 오늘의 한 마디 ]<br/>
          =======================================</h3>
        </div>
        <div style={{marginTop: "10px", textAlign:"center", fontSize: "21px"}}>
          <b>"자세가 불안해요! 허리를 펴는 게 어떨까요?"</b>
        </div>
      </div>
    );
  }
  else{//위험 자세
    return(
      <div style={{width:"1000px", height:"200px", border: "3px solid black", background: "white"}}>
        <div>
          <h3 style={{marginTop: "33px", textAlign:"center"}}>[ 오늘의 한 마디 ]<br/>
          =======================================</h3>
        </div>
        <div style={{marginTop: "10px", textAlign:"center", fontSize: "21px"}}>
          <b>"위험해요! 바른 자세로 앉아주세요!"</b>
        </div>
      </div>
    );
  }
  
}

export default Result_1;