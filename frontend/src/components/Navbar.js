import React from 'react';
import tmdb from '../img/TMDB.jpg';
import Chip from './Chip';
//import original from './../img/original.svg'
const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor :"#052541"}}>
        <a className="navbar-brand" href={"/"} style ={{ marginLeft : "40px"}}>
    <img src={ tmdb } width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
    TMDB
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item dropdown">
        <a href={"anchor"} className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Movies
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href={"/movie"}>Popular</a>
          <a className="dropdown-item" href={"/now-playing"}>Now playing</a>
          <a className="dropdown-item" href={"/upcoming"}>Upcoming</a>
          <a className="dropdown-item" href={"/top-rated"}>Top Rated</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a href={"anchor"} className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          TV Shows
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href={"/tv"}>Popular</a>
          <a className="dropdown-item" href={"/airing-today"}>Airing Today</a>
          <a className="dropdown-item" href={"/on-tv"}>On TV</a>
          <a className="dropdown-item" href={"/tv_top-rated"}>Top Rated</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a href={"anchor"} className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          People
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href={"/person"}>Popular People</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a  href={"anchor"} className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href={'/discuss'}>Discussions</a>
        </div>
      </li>
    </ul>
    <ul className="navbar-nav" style ={{marginLeft : "30px" ,marginRight : "10px"}}>
    {localStorage.getItem('token') &&<React.Fragment><li className="nav-item"><Chip /></li> 
    <li className="nav-item">
        <a className="nav-link" href={"/logout"} data-toggle="tooltip" data-placement="top" title="New User? Please register">Logout</a>
      </li>
      </React.Fragment>}
      {!localStorage.getItem('token')&&<React.Fragment><li className="nav-item">
        <a className="nav-link" href={"/login"}>Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={"/register"} data-toggle="tooltip" data-placement="top" title="New User? Please register">Join TMDb</a>
      </li>
      </React.Fragment>}
    </ul>
  </div>
</nav>
    )
}

export default Navbar;

