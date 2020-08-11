import React from 'react';
import Streaming from '../components/Popular/streaming';
import OnTv from '../components/Popular/onTv';
import InTheaters from '../components/Popular/InTheaters';
import Today from '../components/Trending/Today';
import ThisWeek from '../components/Trending/ThisWeek';
import Latest from '../components/People/Latest';
import Popular from '../components/People/Popular';

function Main(){
  return(
      
<div className="container" style={{marginTop:"50px"}}>
<h3 style ={{ float:"left" ,marginRight:"30px" , fontWeight:"800" , fontSize:"1.5em"}} >What's Popular</h3>
<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{backgroundImage : "radial-gradient(at 30% top, rgba(7, 56, 68, 1) 0%, rgba(3,37,65, 1) 100%)"  }}>
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" style={{ fontSize:"1em" , fontWeight:"700" , color:"white"}}>Streaming</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" style={{ fontSize:"1em" , fontWeight:"700",color:"white"}}>On Tv</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#In-Theaters" role="tab" aria-controls="pills-contact" aria-selected="false" style={{ fontSize:"1em" , fontWeight:"700" ,color:"white"}}>In Theaters</a>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <Streaming />
  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
    <OnTv />
  </div>
  <div className="tab-pane fade" id="In-Theaters" role="tabpanel" aria-labelledby="pills-contact-tab">
    <InTheaters />
  </div>
</div>
<h3 style ={{ float:"left" ,marginRight:"30px", fontWeight:"800" , fontSize:"1.5em"}} >Trending</h3>
<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{backgroundImage : "radial-gradient(at 30% top, rgba(7, 56, 68, 1) 0%, rgba(3,37,65, 1) 100%)" }}>
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="pills-today-tab" data-toggle="pill" href="#pills-today" role="tab" aria-controls="pills-home" aria-selected="true" style={{ fontSize:"1em" , fontWeight:"700" ,color:"white"}}>Today</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="pills-this-week-tab" data-toggle="pill" href="#pills-this-week" role="tab" aria-controls="pills-profile" aria-selected="false" style={{ fontSize:"1em" , fontWeight:"700",color:"white"}}>This Week</a>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-today" role="tabpanel" aria-labelledby="pills-home-tab">
    <Today/>
  </div>
  <div className="tab-pane fade" id="pills-this-week" role="tabpanel" aria-labelledby="pills-profile-tab">
    <ThisWeek />
  </div>
</div>
<h3 style ={{ float:"left" ,marginRight:"30px", fontWeight:"800" , fontSize:"1.5em"}} >People</h3>
<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{backgroundImage : "radial-gradient(at 30% top, rgba(7, 56, 68, 1) 0%, rgba(3,37,65, 1) 100%)" }}>
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="pills-this-week-tab" data-toggle="pill" href="#pills-popluar" role="tab" aria-controls="pills-profile" aria-selected="false" style={{ fontSize:"1em" , fontWeight:"700" ,color:"white"}}>Popular</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link " id="pills-today-tab" data-toggle="pill" href="#pills-latest" role="tab" aria-controls="pills-home" aria-selected="true" style={{ fontSize:"1em" , fontWeight:"700" ,color:"white"}}>Latest</a>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-popluar" role="tabpanel" aria-labelledby="pills-profile-tab">
    <Popular />
  </div>
  <div className="tab-pane fade" id="pills-latest" role="tabpanel" aria-labelledby="pills-home-tab">
    <Latest/>
  </div>
</div>
</div>
  )
}

export default Main;
