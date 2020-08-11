import React,{useState }from 'react';
import axios from 'axios';

function Register(){

  let [username , setUsername ] = useState('');
  let [email, setEmail ] = useState('');
  let [password, setPassword ] = useState('');
  let [confirm_password , setConfirmPassword] = useState('');
  let [msg, setMsg ] = useState('');
  let [error , setError ]= useState('');

  function validateForm(){
	  if(username.trim().length<1){
		  return false
	  }else if( password !== confirm_password || password.length < 4){
		  return false
	  }else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(`${email}`)){
		return false
	  }else{
		  return true
	  }
  }

  function handleSubmit(e){
	e.preventDefault();
	sendDataToServer(email, password ,username);
  }

  function sendDataToServer(email, password , username){
	  const payload = { email , password , username };
	  axios.post('https://movie-db-tmdb.herokuapp.com/api/register' ,  payload )
		.then((response)=>{
			if(response.data.status ===302){
				setError('User already exists with this email. Try login instead !')
			}else{
				setMsg('You have successfully created the account, please login now !!')
			}
		})
  }

  const user_msg = () =>{
	  if(error){
		  return(
			  <div className="alert alert-danger" role="alert">
			  <h4 className="alert-heading">Oops!</h4>
			  <p>{error}</p>
			  </div>
		  )
	  }else if(msg){
		  return(
			  <div className="alert alert-success" role="alert">
				<h4 className="alert-heading">Well done!</h4>
				<p>{msg}</p>
			 </div>
		  )
	  }
  }
    return( 
		<React.Fragment>      
<div className="container">
	<div className="row">
		<div className="col-8">
			<h3 style={{ marginTop :"30px"}}>Sign up for an account</h3>
			<p>Signing up for an account is free and easy. Fill out the form below to get started.</p>
			<form onSubmit ={ handleSubmit }>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">UserName</label>
					<input type="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value ={ username } onChange={ e => setUsername(e.target.value )}/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password(4 characters minimum)</label>
					<input type="password" className="form-control" id="exampleInputPassword1" value ={ password } onChange={ e => setPassword(e.target.value )}/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password confirm</label>
					<input type="password" className="form-control" id="exampleInputPassword1" value= { confirm_password } onChange ={ e => setConfirmPassword(e.target.value )}/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value ={ email } onChange ={ e => setEmail(e.target.value )}/>
					<p>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDb terms of use and privacy policy.</p>
				</div>
				<button type="submit" className="btn btn-primary" disabled ={ !validateForm() }>Sign Up</button>
			</form>
		</div>
		<div className="col-4">
			<div className="card" style={{marginTop:"30px"}}>
				<div className="shadow-lg p-2 mb-2 bg-white rounded">
					<div className="card-body">
						<h5 className="card-title">Benefits of being a member</h5>
						<ul>
							<li>Log the movies and TV shows you have watched</li>
							<li>Keep track of your favourite movies and TV shows and get recommendations from them</li>
							<li>Build and maintain a personal watchlist</li>
							<li>Build custom mixed lists (movies and TV)</li>
							<li>Take part in movie and TV discussions</li>
							<li>Contribute to, and improve the information in our databas</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div className="container" style={{marginTop : "2rem"}}>{ user_msg() }</div>
</React.Fragment>
    )
}


export default Register;