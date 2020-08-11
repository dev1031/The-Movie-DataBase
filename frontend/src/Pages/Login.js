import React ,{useState } from 'react';
import tmdb from '../img/TMDB.jpg';
import axios from 'axios';

function Login(props){

  const [email , setEmail ] =useState('');
  const [password , setPassword ] = useState('');
  const [token , setToken ] = useState('');
  const [userId , setUserId] = useState('');
  const [error , setError] = useState('');
  const [isLoggedIn , setIsLoggedIn] = useState(false);

  function validateForm(){
    return email.trim().length > 0 && password.trim().length > 0;
  };

  function handleSubmit(event){
    event.preventDefault(); 
    console.log(token, userId, isLoggedIn)
    sendDataToServer(email, password);
  }

  function sendDataToServer(email , password ){
    const payload = {
      email : email ,
      password : password
    }

    axios.post('https://movie-db-tmdb.herokuapp.com/api/login' ,payload)
    .then((response)=>{
      if(response.data.status ===401){
        setError(response.data.error)
      }else{
        setToken(localStorage.setItem('token',response.data.token ));
        setUserId(localStorage.setItem('userId' , response.data.userId));
        setIsLoggedIn(localStorage.setItem('isLoggedIn' , true));
        localStorage.setItem('email', email)
        //console.log(props)
        window.location ='/dashboard';
      }
    })
    .catch((error)=>setError(error));
  }

    return(
    <div className="card mb-3" style={{width: "700px" , height : "310px" , marginTop: "10%" , marginLeft: "25%"}}>
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <div className="row no-gutters">
          <div className="col-md-5">
            <img src= { tmdb } className="card-img" style={{height :"300px" , width : "300px"}} alt="..." />
          </div>
          <div className="col-md-6" style = {{marginLeft : "10px"}}>
          <div className="card-body">
            <h5 className="card-title" style ={{textAlign : "center"}}>Login here</h5>
            <form onSubmit ={ handleSubmit }>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value ={ email } onChange = { e => setEmail(e.target.value )} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" value ={ password } onChange = { e => setPassword(e.target.value )}/>
                </div>
                <p style={{color :"red"}}>{ error }</p>
                <button type="submit" className="btn btn-primary" disabled = {!validateForm()}>Login</button>
            </form>
          </div>
      </div>
    </div>
    </div>
    </div>
    )
}
export default Login;