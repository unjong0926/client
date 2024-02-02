import React, { useEffect, useState } from "react";
import "../css/Login.css"
import { Link} from "react-router-dom";
import axios from 'axios';


function Login(){

  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/login')
      .then((res) => {
        console.log('Response from server:', res.data);
      })
      .catch(error => console.error(error.response.data));
  }, []);


  return(
    <div className="Web_page_Login">
      <div className="Web_page_Login_Header">
        <Link  to="/Home">
          <p>Travel</p>
        </Link>
      </div>
      <div className="Web_page_Login_Body">
        <div className="Web_Login_mini_Box">
          <div className="mini_Box_Header">
            <Link  to="/Home">
              <p>Travel</p>
            </Link>  
          </div>
          <div className="mini_Box_Tittle">
            ID
          </div>
          <div className="inputWrap">
            <input type="text" placeholder="ID를 입력하세요"
            value={ID}/>
          </div>
          <div className="errorMessageWrap">
                <div>
                  *아이디를 입력해주세요.
                </div>

            
          </div>

          <div style={{marginTop: "20px"}}className="mini_Box_Tittle">
            PW
          </div>
          <div className="inputWrap">
            <input type="password" placeholder="비밀번호를 입력하세요"
            value={PW}/>

          </div>
          <div className="errorMessageWrap">
            {/* {
              !PWValid && PW.length > 0 &&(
                <div>*영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
              )
            } */}
          </div>
          <div className="Making_ID">
            <Link  to="/Made">
              <p>회원가입</p>
            </Link>
          </div>

          <div className="mini_Box_button">
            <button>
              로그인
            </button>
          </div>
        </div>

      </div>
    </div>
  )
};

export default Login;