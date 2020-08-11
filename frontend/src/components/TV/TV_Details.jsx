import  React from 'react'
import { API_URL , API_KEY, IMAGE_BASE_URL} from '../../config/config';
import TvVotes from './TV_Votes';
import MPlayList from '../Movies/M_Playlist';
import TvReviews from './TV_Reviews';
import TvCastCrew from './TV_Cast_Crew';

class TvDetails extends React.Component{
    constructor(props){
        super(props);
        //console.log(props.match.params.tv)
        this.state={
            data :'',
            tv_id : props.match.params.tv_id.slice(1,),
            genres:[]
        }
    }
    componentDidMount(){
        fetch(`${API_URL}tv/${this.state.tv_id}?api_key=${API_KEY}&language=en-US`)
         .then((response)=>response.json())
        .then((data)=>this.setState({
            data:data,
            genres:[...data.genres]
        }));
    }

    render(){
        //console.log(this.state.data);
        document.title = this.state.data.original_name + "("+this.state.data.last_air_date+")"

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
               <div style={{fontSize :"2.5rem" ,fontFamily:"Source Sans Pro ,Arial, sans-serif", marginTop:"2rem", fontWeight:"900" }}> {this.state.data.original_name}</div>
                <p>{this.state.data.last_air_date}({this.state.data.original_language})-{genre}</p>
                <TvVotes vote = {this.state.data.vote_average} popularity = {this.state.data.popularity}  total_votes = {this.state.data.vote_count}/>
                <MPlayList />
                <p style={{ fontStyle:"italic" , opacity:"0.7"}}>{this.state.data.tagline}</p>
                <div style={{ fontWeight:"900", fontSize:"1.5rem"}}>Overview</div>
                <p>{this.state.data.overview}</p>
            </div>
        </div>  
        </div>  
        <TvCastCrew  movie_id ={ this.state.tv_id }/>  
        <div className ="container">
            <div style={{ marginTop:"5vh" , fontWeight:"600", fontSize:"2rem"}}>More Info</div>
            <div className="card">
                <div className ="shadow mb-1 bg-white rounded">
                    <div style ={{display:"flex", flexDirection:"row" }}>
                        <div style={{flexGrow:"1"}}><img src={`${IMAGE_BASE_URL}w500/${this.state.data.poster_path}`} alt ="...img" style={{height:"250px", width:"170px"}}/></div>
                        <div style={{flexGrow:"6" , textAlign:"left", marginLeft:"10px"}}>
                            <div style={{ marginTop:"1%" ,  fontWeight:"700", fontSize:"25px"}}>{this.state.data.original_name}</div>
                            <div style={{ marginTop:"1%" ,  fontWeight:"700", fontSize:"15px"}}>Total Season -{this.state.data.number_of_seasons}</div>
                            <div style={{ marginTop:"1%" , fontWeight:"700", fontSize:"15px"}}>Total Episodes-{this.state.data.number_of_episodes}</div>
                            <p>{this.state.data.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TvReviews  movie_id={this.state.tv_id} /> 
        </React.Fragment>
    )
    }
}

export default TvDetails
