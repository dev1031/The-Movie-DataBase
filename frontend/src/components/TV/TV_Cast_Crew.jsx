import React from 'react'
import { API_URL , API_KEY, IMAGE_BASE_URL} from '../../config/config';

class TV_Cast_Crew extends React.Component{
        constructor(props){
            super(props);
            //let movie_id = props.movie_id;
            this.state ={
                movie_id : props.movie_id,
                cast :[],
                crew :[]
            }
        }

    componentDidMount(){
        fetch(`${API_URL}tv/${this.state.movie_id}/credits?api_key=${API_KEY}&language=en-US`)
        .then((response)=>response.json())
        //.then((response)=>console.log(response))
        .then((response)=>this.setState({
            cast:response.cast,
            crew: response.crew
        }));
    }

 render(){
    //console.log( this.state.crew);
    let Cast = this.state.cast.map((item)=>{
        if(item.profile_path){
        return(       
           <div className="col-sm-2" key ={item.credit_id}>
            <div className="shadow mb-3 bg-white rounded">
                <div className="card">
                    <img src={`${IMAGE_BASE_URL}w500/${item.profile_path}`}alt= "...img" style={{width:"9.5rem"}} />
                <div className="card-body">
                    <div className="card-title" style={{fontWeight:"700"}}>{item.name}</div>
                    <div className="card-text" style={{fontWeight:"300"}}>{item.character}</div>
                </div>
                </div>
            </div>    
            </div>
        )}
    })

    let Crew =
        this.state.crew.map((item)=>{
            if(item.profile_path){
            return (
             <div className="col-sm-2" key ={item.credit_id}>
            <div className="shadow mb-3 bg-white rounded">
                <div className="card">
                    <img src={`${IMAGE_BASE_URL}w500/${item.profile_path}`}alt= "...img" style={{width:"9.5rem"}} />
                <div className="card-body">
                    <div className="card-title" style={{fontWeight:"700"}}>{item.name}</div>
                    <div className="card-text" style={{fontWeight:"300"}}>{item.department}</div>
                </div>
                </div>
            </div>    
            </div>
            )}
        })


    return (
        <div className="container" style={{alignItems:"stretch"}}>
        <div style={{ marginTop:"5vh" , fontWeight:"600", fontSize:"2rem" }}> Top Billed Cast</div>
        <div style={{overflowX :"scroll",overflowY:"hidden", display :"flex", alignItems:"stretch"}}>{ Cast }</div>
        <div style={{ marginTop:"5vh" , fontWeight:"600", fontSize:"2rem"}}> Crew</div>
        <div style={{overflowX :"scroll",overflowY:"hidden", display :"flex" }}>{ Crew }</div>
        </div>
    )
}
}

export default TV_Cast_Crew
