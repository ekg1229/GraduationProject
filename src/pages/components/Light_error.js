import React, {useState, useEffect} from "react";

//데이터 없을 때 안내문
function LightError(){
  const [show, setShow] = useState(true);

  const HandleBtn = () =>{
    setShow(false);
  }

  if(show){ //안내문구 보여줌
    return(
      <>
        <div style={{position: "fixed", top: "0px", left: "0px", width: "100%", height: "100%", zIndex: "10", opacity: "0.5", backgroundColor: "rgb(0, 0, 0)"}}></div>
        <div style={{position: "absolute", top: "50%", left: "50%", width: "400px", minHeight: "300px", margin: "-150px 0 0 -200px", padding: "10px", textAlign: "center", zIndex: "20", backgroundColor: "white", fontSize: "1.4rem"}}>
          <div style={{width:"auto", height:"auto", border: "3px solid black", background: "white"}}>
              <br/><h3 style={{fontWeight: "bold"}}>안내문</h3><br/>
              <p style={{fontSize: "1.5rem", color: "red", fontWeight: "bold"}}>기기가 켜져있는지 확인해주세요!<br/><br/></p>
              <button onClick={HandleBtn}>close</button><br/><br/>
          </div>
        </div>
      </>
    );
  }
  else{ //안내문구X
    return(
      <></>
    );
  }
  
}

export default LightError;