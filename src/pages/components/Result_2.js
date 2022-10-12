import React from "react";

function Result_2(){
  return(
    <div style={{width:"1000px", height:"300px", border: "2px solid black"}}>
      <div>
        <h3 style={{marginTop: "10px", textAlign:"center"}}>측정 결과 분석<br/>
        ============================================</h3>
      </div>
      <div style={{marginLeft: "280px", marginRight: "50px", fontSize: "20px"}}>
        - 점점 좋아지고 있으나, 아직은 주의 요망.<br/>
        - 1번 센서: 양호, 2번 센서: 경고, 3번 센서: 양호<br/>
        - 1번 센서와 3번 센서의 상태는 나날이 좋아지고 있음<br/>
        - 사용자는 허리를 옆으로 구부리는 자세를 주로 취함<br/><br/>
      </div>
      <div style={{marginTop: "10px", textAlign:"center", fontSize: "21px"}}>
        <b>결론: 허리를 의식적으로 피도록 노력해야 함.</b>
      </div>
    </div>
  );
}

export default Result_2;