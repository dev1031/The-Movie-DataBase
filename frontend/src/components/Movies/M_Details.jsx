import React from 'react';
import { API_URL , API_KEY, IMAGE_BASE_URL} from '../../config/config';
import MVotes from './M_Votes';
import MPlaylist from './M_Playlist';
import MCastCrew from './M_Cast_Crew';
import MReviews from './M_Reviews';
import './M_Details.css'

class M_Details extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data: '',
            movie_id :props.match.params.movie_id.slice(1,),
            genres:[]
        }
    }

    componentDidMount(){
        fetch(`${API_URL}movie/${this.state.movie_id}?api_key=${API_KEY}&language=en-US`)
         .then((response)=>response.json())
        .then((data)=>this.setState({
            data:data,
            genres:[...data.genres]
        }));
    }

    render(){
        //console.log(this.state.data.release_date);
        document.title = this.state.data.title + "("+this.state.data.release_date+")"

      let arr = []
       for(let i =0;i<this.state.genres.length; i++){
          arr.push((this.state.genres[i]).name);
       }
       let genre = arr.join(',');
    return (
        <React.Fragment>
        <div className="flex-container_details" style={{ backgroundImage:`url(${IMAGE_BASE_URL}w1920_and_h800_multi_faces/${this.state.data.backdrop_path})` , backgroundRepeat:"no-repeat", backgroundSize:"cover" , backgroundPosition: "right -200px top"}}>
        <div className="wrap" style={{backgroundImage: `linear-gradient(to right, rgba(18.04%, 9.41%, 23.14%, 1.00) 150px, rgba(25.10%, 15.69%, 30.59%, 0.84) 100%)`}}>
            <div style={{flexGrow:2}}>
                <img src={`${IMAGE_BASE_URL}w500/${this.state.data.poster_path}`} alt ="...img" />
            </div>
            <div style={{flexGrow:5 , textAlign:"left" , color:"white"}}>
               <div style={{fontSize :"2.5rem" ,fontFamily:"Source Sans Pro ,Arial, sans-serif", marginTop:"2rem", fontWeight:"900" }}> {this.state.data.original_title}</div>
                <p>{this.state.data.release_date}({this.state.data.original_language})-{genre}-{Math.floor(this.state.data.runtime /60)}h{this.state.data.runtime%60}m</p>
                <MVotes vote = {this.state.data.vote_average} popularity = {this.state.data.popularity}  total_votes = {this.state.data.vote_count}/>
                <MPlaylist />
                <p style={{ fontStyle:"italic" , opacity:"0.7"}}>{this.state.data.tagline}</p>
                <div style={{ fontWeight:"900", fontSize:"1.5rem"}}>Overview</div>
                <p>{this.state.data.overview}</p>
            </div>
        </div>  
        </div>  
        <MCastCrew  movie_id ={ this.state.movie_id }/>  
        <MReviews  movie_id={this.state.movie_id} /> 
        </React.Fragment> 
    )
  }
}

export default M_Details
