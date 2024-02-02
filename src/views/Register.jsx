import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../css/Register.css'
import { Link } from "react-router-dom";



function Register() {
  const [userdata, setUserData] = useState(null);
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userNickname, setUserNickName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/register')
      .then((res) => {
        console.log('Response from server:', res.data);
        setUserData(res.data);
      })
      .catch(error => console.error(error.response.data));
  }, []);

  async function handleSubmit(){
    await axios.post('http://localhost:4000/register', {id : userId, pw : userPw, Nickname : userNickname})
  }



  return (
    <div className="Web_page_Login">
      <div className="Web_page_Login_Header">
        <Link to="/Home"><p>Travel</p></Link>
      </div>
      <div className="Web_page_Login_Body">
        <div className="Web_Login_mini_Box">
          <div className="mini_Box_Header">
            <Link to="/Home"><p>Travel</p></Link>
          </div>
            <div className="mini_Box_Tittle">
              성함
            </div>
            <div className="inputWrap">
              <input
                type="text" 
                placeholder="성함을 입력해주세요"
                value={userNickname}
                onChange={(e)=>setUserNickName(e.target.value)}
                />
            </div>
            <div style={{ marginTop: "20px" }} className="mini_Box_Tittle">
              ID
            </div>
            <div className="inputWrap">
              <input
                type="text" 
                placeholder="아이디를 입력해주세요"
                value={userId}
                onChange={(e)=>setUserId(e.target.value)}
                />
            </div>

            <div style={{ marginTop: "20px" }} className="mini_Box_Tittle">
              PW
            </div>
            <div className="inputWrap">
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={userPw}
                onChange={(e)=>setUserPw(e.target.value)}
                />
            </div>
            
            <div className="mini_Box_button">
            <button onClick={handleSubmit}>회원가입</button>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Register;
