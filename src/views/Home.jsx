import React from "react";
import "../css/Home.css"
import { Link } from "react-router-dom";

function Home(){


  useEffect(() => {
    axios.get('http://localhost:4000/Home')
      .then((res) => {
        console.log('Response from server:', res.data);
        setUserData(res.data);
      })
      .catch(error => console.error(error.response.data));
  }, []);


    
  return(
    <div className="Main_HomePage">
      <div className="Main_Home_Header">
        <div className="Home_Link">
          <Link  to="/Home"><p>Travel</p></Link>
        </div>
        <div className="User">
          <p>님 환영합니다</p>
      </div>
        <div className="Home_Log">
          <Link  to="/Login"><p>로그인</p></Link>
        </div>
      </div>



      <div className="Main_Home_Body_1">
        <div className="image">
          <p>이미지</p>
        </div>
        <div className="text">
          <p>
            텍스트
          </p>
        </div>

      </div>

      <div className="Main_Home_Body_2">

        <div>

        </div>
        
      </div>

      <div className="Main_Home_Footer">
          <p>
            Copyright &copy;An Lab
          </p>
      </div>
    </div>
  );
};

export default Home;