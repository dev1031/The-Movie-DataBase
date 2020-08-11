import React from 'react';
import './TV_Votes.css';

const TV_Votes = (props)=>{
    
        return(
            <div>   
        <div className="flex-container_votes">
  <div style={{flexGrow: "8"}}>
        <div className="votes" style={{justifyContent:"center", alignItems:"center"}}>
                <div style={{fontWeight:"900" , textAlign:"center" , justifyContent:"center"}}>Audience</div>
                <div className="progress" style={{width :"80%"}}>
                    <div className="progress-bar bg-success" role="progressbar" style={{width: props.vote*10+"%",ariaValuenow:"25", ariaValuemin:"0", ariaValuemax:"100" }}>{props.vote *10}%</div>
                </div>
        </div>
  </div>
  <div style={{flexGrow: "1"}}>
         <div className="votes">
                <div style={{fontWeight:"900"}}>Popularity</div>
                <div>
                    <div>{props.popularity}</div>
                </div>
        </div>
  </div>
  <div style={{flexGrow: "1"}}>
        <div className="votes">
                <div style={{fontWeight:"900"}}>Votes</div>
                <div>{props.total_votes}</div>
        </div>
  </div>
</div>
        </div>
        )
    
}

export default TV_Votes;