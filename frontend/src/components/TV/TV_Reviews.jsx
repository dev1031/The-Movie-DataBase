import React from 'react'
import { API_URL , API_KEY} from '../../config/config';
import avatar from '../../img/TMDB.jpg';

class TV_Reviews extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            movie_id : props.movie_id,
            data : []
        }
    }

    componentDidMount(){
        fetch(`${API_URL}tv/${this.state.movie_id}/reviews?api_key=${API_KEY}&language=en-US`)
        .then((response)=>response.json())
        .then((response)=>this.setState({
            data: response.results
        }))
    }

    render(){
        //console.log(this.state.data);
        if(this.state.data.length===0){
            return (<div className ="container">
            <div style={{marginTop:"5vh" , fontWeight:"600", fontSize:"2rem"}}>Reviews</div>
        <div>We don't have any reviews. Would you like to write one?</div>
        </div>
            )
        }
        let reviews = this.state.data.map((review)=>{
            return (
                <div className="shadow mb-3 bg-white rounded" key ={review.id}>
                <div className="card" style={{marginBottom:"50px"}}> 
                    <div className="flex-container_review" style={{display: "flex"}}>
                        <div style={{flexGrow: "3",color:" black",textAlign: "left",fontSize: "30px" , marginTop:"30px" , marginLeft:"30px"}}>
                        <img src={avatar} alt="...avatar" style={{height:"50px", width:"50px", borderRadius:"50%"}}/>
                        </div>
                        <div style={{flexGrow: "7",color:" black",margin: "10px",textAlign: "center",fontSize: "30px"}}>
                            <div style={{fontSize:"1em",textAlign:"left", fontWeight:"100",marginTop:"30px"}}>
                                <blockquote className="blockquote text-left">
                                    <p className="mb-0" style={{fontWeight:"500"}}>A review by {review.author}</p>
                                    <footer className="blockquote-footer">Written by <cite title="Source Title">{review.author}</cite></footer>
                                </blockquote>
                            </div>
                            <div style={{fontSize:".5em", fontWeight:"100", whiteSpace:"initial" , textAlign:"left"}}><p>{review.content}</p></div>
                        </div>
                    </div>
                </div>
                </div>
            )}
        )
    return (
        <div className ="container">
            <div style={{marginTop:"5vh" , fontWeight:"600", fontSize:"2rem"}}>Reviews</div>
        <div>{reviews}</div>
        </div>
    )
    }
}

export default TV_Reviews
