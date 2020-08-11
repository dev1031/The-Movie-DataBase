import React from 'react';
import { API_KEY , API_URL ,IMAGE_BASE_URL } from '../config/config';
import Main from './Main';
import { withRouter } from 'react-router-dom';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movies : [],
            allMovies : [],
            search:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit  = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        fetch(`${API_URL}movie/now_playing?api_key=${API_KEY}`)
        .then((res)=>res.json())
        .then((result)=>this.setState({
            movies : [...result.results][0],
            allMovies: [...result.results]
        }))
    }

    handleChange(e){
        this.setState({
            search:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        if(!this.state.search.trim().length <1){
            this.props.history.push(`/search/:${this.state.search}`)
        }
    }

    render(){
        //console.log(this.state.movies);
        return(
            <React.Fragment>
            <div className="card bg-light text-white" style ={{marginLeft : "5%" , marginRight : "5%" , marginTop : "0px" , heigth: "400px", overflow : "hidden"}}>
                <img src={`${IMAGE_BASE_URL}w1920_and_h800_multi_faces/${this.state.movies.backdrop_path}`} className="card-img" alt="..." style = {{ height : "400px",  opacity: "0.8"}}/>
                <div className="card-img-overlay" style={{backgroundImage: `linear-gradient(to right, rgba(3%, 37%, 65%, 2.00) 10px, rgba(3%, 37%, 65%, 0.6) 10%)`}}>
                    <div className="card-title" style={{textAlign : "bottom" ,fontSize: "3em",fontWeight: "700",lineheight: "1", marginTop:"30px" , fontFamily:"Source Sans Pro, Arial, sans-serif"}}>Welcome.</div>
                    <div className="card-text" style={{marginBottom:"80px",fontSize: "2em",fontWeight: "600",lineheight: "1"}}>Millions of movies, TV shows and people to discover. Explore now. </div>
                    <form className ="form-inline" onSubmit={this.handleSubmit}>
                    <input className="form-control " type="text" placeholder="Search for a movie, tv show ,person ...." aria-label="Search"style={{width : "90%"}} value ={this.state.search} onChange={this.handleChange}/>
                    <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" >Search</button>
                    </form>
                </div>
            </div>
            <Main />
            </React.Fragment>
        )
    }
}

export default withRouter(Home);