import React from 'react'
import { API_KEY , API_URL ,IMAGE_BASE_URL } from '../config/config';
import alter from '../img/alter.png';

class Search extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state ={
            data:[],
            query : this.props.match.params.query.slice('1,'),
            isLoading : true
        }
    }

    componentDidMount(){
        fetch(`${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${this.state.query}&page=1&include_adult=false`)
        .then((res)=>res.json())
        //.then((res)=>console.log(res))
        .then((res)=>this.setState({
            data: res.results,
            isLoading : false

        }))
    }

    render(){
        const search_res = this.state.data.map((item)=>{
            if(item.poster_path){
            return(
                <div style={{margin:"15px", display:"flex"}} class="shadow-sm mb-5 bg-white rounded">
                    <div>
                        <img src={`${IMAGE_BASE_URL}w500/${item.poster_path}`} alt="" style={{height:"141px", width :"94px"}} />
                    </div>
                    <div style={{marginLeft:"15px", marginTop:"15px"}}>
                       <div style={{fontSize:"1.2em", fontWeight:"600"}}> {item.original_title}</div>
                       <div style={{fontSize:"0.9em", fontWeight:"200", marginBottom:"10px"}}> {item.release_date}</div>
                       <div style={{overflowY:"hidden" , height:"50px"}}>{item.overview}</div>
                    </div>
                </div>
            )}else{
               return ( <div style={{margin:"15px", display:"flex"}} class="shadow-sm mb-5 bg-white rounded">
                    <div>
                        <img src={alter} alt="" style={{height:"141px", width :"94px"}} />
                    </div>
                    <div style={{marginLeft:"15px", marginTop:"15px"}}>
                       <div style={{fontSize:"1.2em", fontWeight:"600"}}> {item.original_title}</div>
                       <div style={{fontSize:"0.9em", fontWeight:"200", marginBottom:"10px"}}> {item.release_date}</div>
                       <div style={{overflowY:"hidden" , height:"50px"}}>{item.overview}</div>
                    </div>
                </div>
               )
            }
        })

        if(this.state.isLoading){
            return(
                <div className="wrap_load" style={{display:"flex",justifyContent:"center", alignItems:"center" ,height:"300px"}}>
                    <div className="spinner-border text-info" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
    return (
        <div className="container">
            <div style={{marginTop:"10px", marginBottom:"10px" , fontSize:"1em", fontWeight:"600"}}>Total results-{this.state.data.length}</div>
           <div>{search_res}</div> 
        </div>
    )
 }
}

export default Search
