import React from "react";

//오늘의 한 마디 기능
function Result_1(props){
  const state = props.state;

  if(state==="1"){//안정
    return(
      <div style={{display:"flex", borderRadius:"1rem", justifyContent:"center", alignItems:"center", width:"1000px", height:"200px", border:"1px black", boxShadow:"0 0 10px black", background:"#B0D9F2"}}>
        <div style={{fontSize:"2.5rem", color:"black"}}>
        <b>"잘했어요! 이대로 계속 유지해주세요!"</b>
        </div>
      </div>
    );
  }
  else if(state==="2"){//경고
    return(
      <div style={{display:"flex", borderRadius:"1rem", justifyContent:"center", alignItems:"center", width:"1000px", height:"200px", border:"1px black", boxShadow:"0 0 10px black", background:"#B0D9F2"}}>
        <div style={{fontSize:"2.5rem", color:"black"}}>
        <b>"자세가 불안해요! 허리를 펴는 게 어떨까요?"</b>
        </div>
      </div>
    );
  }
  else{//위험
    return(
      <div style={{display:"flex", borderRadius:"1rem", justifyContent:"center", alignItems:"center", width:"1000px", height:"200px", border:"1px black", boxShadow:"0 0 10px black", background:"#B0D9F2"}}>
        <div style={{fontSize:"2.5rem", color:"black"}}>
          <b>"위험해요! 바른 자세로 앉아주세요!"</b>
        </div>
      </div>
    );
  }
  
}

export default Result_1;