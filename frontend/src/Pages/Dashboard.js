import React from 'react';
import axios from 'axios';
import './Dashboard.css'

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            joinedAt :Date.now(),
            email: ''
        }
    }

    componentDidMount(){
        axios.post('https://movie-db-tmdb.herokuapp.com/api/user' ,
        { 
          userId:localStorage.getItem('userId')
        } , 
        {
          headers :{
            'Authorization':'Bearer '+localStorage.getItem('token')
          }
        })
        .then((response)=> this.setState({
          email: response.data[0].email,
          joinedAt : Date(response.data[0].date)
        }))
        .then(()=>localStorage.setItem('email',this.state.email))
        
    }

    render(){
    
        return(
          <React.Fragment>
          <div className="outer">
            <div className="flex-container">
              <div>
                <h1>{this.state.email.trim()[0]}</h1>
              </div>
            </div>
            <h1 style={{color:"white" , textAlign:"center"}}>{this.state.email} <span style={{ fontSize: "20px" , fontWeight:"200" }}>Member since-{this.state.joinedAt}</span></h1>
          </div>
          <div className="container" style={{marginTop:"20px"}}>
              <h1 style={{ fontWeight: "700" ,fontSize:"1.5em"}}>Stats</h1>
              <div className="row">
                  <div className="col-sm">
                    Total Edits
                    <h1 style ={{color:"red" ,fontWeight: "700" ,fontSize:"3.6em"}}>0</h1>
                  </div>
                  <div className="col-sm">
                    Total Ratings
                    <h1 style={{color:"red" ,fontWeight: "700" ,fontSize:"3.6em"}}>0</h1>
                  </div>
                  <div className="col-sm">
                  Most Watched Genres
                  <h6 style={{marginTop:"10px"}}>You haven't logged any movies or TV shows.</h6>
                  </div>
            </div>
            <h3 style={{marginTop:"30px", fontWeight: "700" ,fontSize:"1.5em",}}>Upcoming From Watchlist</h3>
            <p>There are no upcoming movies on your watchlist.</p>
            <h3 style={{marginTop:"30px",fontWeight: "700" ,fontSize:"1.5em"}}>Recent Discussions</h3>
            <p>You are not watching any discussions.</p>
            <h3 style={{marginTop:"30px",fontWeight: "700" ,fontSize:"1.5em"}}>Recent Activity</h3>
            <p>You haven't made any recent edits.</p>
          </div>
          </React.Fragment>
        )
    }
}

export default Dashboard;