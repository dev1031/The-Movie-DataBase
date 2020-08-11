import React from 'react';
import { API_URL, API_KEY,IMAGE_BASE_URL } from '../../config/config'

class ThisWeek extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data : [],
            isLoading : true
        }
    }

    componentDidMount(){
        fetch(`${API_URL}trending/tv/week?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(response =>this.setState({
            data : [...response.results],
            isLoading :false
        }))
    }

    render(){
        
        if(this.state.isLoading){
            return (
                <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                </div>
            )
        }

        let this_week = this.state.data.map((movie)=>{
            return(
                <div  key ={ movie.id}style={{marginLeft:"10px"}} >
                <div className="shadow-sm mb-3 bg-white rounded">
                <a href ={`tv/:${movie.id}`} style ={{textDecoration:"none"}}>  <div className="card" style ={{borderRadius:"5%"}}>
                    <img src={`${IMAGE_BASE_URL}w500/${movie.poster_path}`} style={{height : "200px" , width : "200px" ,borderRadius:"5% 5%  0 0"  }} alt="..."  />
                        <div className="card-body">
                           <h5 className="card-title" style={{fontWeight :"700" ,fontSize:"1em" , color:"black"}}>{ movie.original_name}</h5>
                             <p className="card-text" style={{fontSize:"1em" , color: "rgba(0,0,0,0.6)"}}>{movie.first_air_date}</p>
                        </div>
                  </div>
                 </a> 
                </div>
                </div>
            )
        })

        return(
             <div style={{overflowX :"scroll",overflowY:"hidden", display :"flex" ,justifyContent:"flex-start" , alignItems:"flex-start", alignContent:"flex-start"}}>
                { this_week }
            </div>
        )
    }
}

export default ThisWeek;