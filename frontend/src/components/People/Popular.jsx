import React  from 'react';
import { API_URL, API_KEY ,IMAGE_BASE_URL} from '../../config/config'

class Popular extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data : [],
            isLoading:true
        }
    }

    componentDidMount(){
        fetch(`${API_URL}person/popular?api_key=${API_KEY}`)
        .then((response)=> response.json())
        .then((response)=>this.setState({
            data : [...response.results],
            isLoading:false
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
        let popular = this.state.data.map((movie)=>{
            return(
                <div  style={{marginLeft:"10px"}} key ={movie.id}>
                <div className="shadow mb-3 bg-white rounded" >
                 <div className="card" style ={{borderRadius:"5%"}}>
                   <a href ={`/people/:${movie.id}`} style ={{textDecoration :"none"}}><img src={`${IMAGE_BASE_URL}w500/${movie.profile_path}`} style={{height : "200px" , width : "200px" , borderRadius:" 5% 5% 0 0"}} alt="..." />
                        <div className="card-body">
                          <h5 className="card-title" style={{fontWeight :"700" , color:"black"}}>{ movie.name}</h5>
                             <p className="card-text" style={{fontSize:"1em" , color: "rgba(0,0,0,0.6)"}}>{movie.known_for_department}</p>
                        </div>
                    </a>    
                  </div>
                </div>
                </div>
            )
        })
        return(
            <div className="container">
                <div style={{overflowX :"scroll",overflowY:"hidden", display :"flex" ,justifyContent:"flex-start" , alignItems:"flex-start", alignContent:"flex-start" }}>
                { popular }
            </div>
            </div>
            
        )
    }
}

export default Popular;