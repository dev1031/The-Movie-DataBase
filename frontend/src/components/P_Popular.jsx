import React from 'react';
import { API_KEY , API_URL , IMAGE_BASE_URL} from '../config/config';

class P_Popular extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state ={
            data : [],
            currentPage : 1,
            isLoading : true
        }
    }
    componentDidMount(){
        fetch(`${ API_URL}person/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage}`)
        .then((response)=>response.json())
        .then((response)=>this.setState({
            data: [...response.results],
            isLoading:false
        }))
    }

    handleClick(){
        if(this.state.currentPage<500){
            this.setState({
                currentPage: this.state.currentPage+1
            })
        }
        fetch(`${API_URL}person/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage+1}`)
        .then((response)=>response.json())
        .then((response)=>this.setState({
            data:[...response.results],
            isLoading:false
        }));
    }

    render(){
        //console.log(this.state.data);
        if(this.state.isLoading){
            return (<div className="d-flex justify-content-center" >
                        <div className="spinner-border" role="status"  style={{ margin:"25%"}}>
                        <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                  )
        };
        let movies = this.state.data.map((movie)=>{
        return(
             <div className="shadow-sm mb-3 bg-white rounded" key ={movie.id}>
            <div className="card" style={{width: "12rem", marginBottom:"2rem"}} >
              <a href ={`/people/:${movie.id}`} style ={{textDecoration :"none"}}> <img src={`${IMAGE_BASE_URL}w500/${movie.profile_path}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-text" style={{color:"black"}}>{movie.name}</h6>
                        <p className="card-text"><small className="text-muted">{movie.known_for[0].title}...</small></p>
                    </div>
                </a>    
            </div>        
            </div>
            )
        })
        return(
            <div className="container">
                <h2 style={{fontWeight:"700", fontSize:"2.5em" ,marginTop:"1rem"}}>Popular People</h2>
                <div className="row" style={{display:"flex", justifyContent:"space-between" , flexWrap:"wrap"}}>{movies}</div>
                <button className="btn btn-primary" type="button" style={{marginLeft:"45%"}} onClick ={ this.handleClick }>Load More</button>
            </div>
        )
    }
}

export default P_Popular;