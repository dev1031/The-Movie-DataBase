import React from 'react';
import tmdb from '../img/TMDB.jpg';
import './Footer.css';

class Footer extends React.Component{
   render(){
       let str = Boolean(localStorage.getItem('isLoggedIn'))?'Hi '+localStorage.getItem('email')+ '!':'JOIN THE COMMUNITY'
       return(
           <div style ={{backgroundColor : "#052541" , marginBottom :"0px" , marginTop:"5%" ,display :"flex",justifyContent :"space-between" , paddingTop:"80px", paddingBottom:"80px" ,color:"#ffffff"}}>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div style={{textAlign:"right" , marginTop:"-25px"}}>
                   <img src={ tmdb } style={{ height :"150px", width :"150px"}} alt="..." />
                   <div style ={{ backgroundColor:"#fff" ,height :"40px" ,border :"2px solid #fff" , borderRadius:"5px"}}>
                    <span style={{ color : "#3996be" , fontSize : "1.3em" , fontWeight:"bold" , paddingTop:"8px", paddingLeft:"16px",paddingRight:"16px", paddingBottom:"8px"}} >{str}</span>
                   </div>
               </div>
               <div id ="list">
                   <h3>THE BASICS</h3>
                        <p>About TMDb</p>
                        <p>Contact Us</p>
                        <p>Support Fourms</p>
                        <p>API</p>
                        <p>System Status</p>
               </div>
               <div id ="list">
               <h3>GET INVOLVED</h3>
                    <p>Contribution Bible</p>
                    <p>3rd Party Apppcations</p>
                    <p>Add New Movie</p>
                    <p>Add New TV Show</p>     
               </div>
               <div id ="list">
               <h3>COMMUNITY</h3>
                    <p>Guidepnes</p>
                    <p>Discussions</p>
                    <p>LeaderboardL</p>
                    <p>Twitter</p>   
               </div>
               <div id ="list">
               <h3>LEGAL</h3>
                    <p>Terms of Use</p>
                    <p>API Terms of Use</p>
                    <p>Privacy Popcy</p>
               </div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
           </div>
       )
   }
}

export default Footer;