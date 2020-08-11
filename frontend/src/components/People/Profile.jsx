import React from 'react';
import { API_URL , API_KEY} from '../../config/config';
import './Profile.css';

class  Profile extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data:'',
            profile_id : props.match.params.person_id,
            known_as:[],
            credits:[]
        }
    }

    componentDidMount(){
        fetch(`${ API_URL}person/${this.state.profile_id.slice(1,)}?api_key=${API_KEY}&language=en-US`)
        .then((response)=>response.json())
        .then((response)=>this.setState({
            data: response,
            known_as:response.also_known_as
        }))

        fetch(`${ API_URL}person/${this.state.profile_id.slice(1,)}/combined_credits?api_key=${API_KEY}&language=en-US`)
        .then((response)=>response.json())
        //.then((response)=>console.log(response))
        .then((response)=>this.setState({
            credits:response.cast
        }))

    }
    render(){
        document.title =`${this.state.data.name}`;
        //console.log(this.state.credits);
        let known = this.state.known_as.map((item, i)=>{
            return(
                <p key ={i} style={{marginBottom:"1px"}}>{item}</p>
            )
        })

        let gender = ()=>{
            return this.state.data.gender===1?'Female':'Male'
        }

        let people_credit = this.state.credits.map((item)=>{
            if(item.poster_path){
                return(
                    <div style={{ width :"130px", height:"195px" ,marginLeft:"10px", borderRadius:"5%"}} key ={item.id} >
                        <img src= {`https://image.tmdb.org/t/p/w130_and_h195_bestv2/${item.poster_path}`} alt ="...img" style={{borderRadius:"5%"}}/>
                        <p style={{color:"blue"}}>{item.original_title}</p>
                    </div>
            )}else{
                return ''
            }
        })

        let movies_and_tv = this.state.credits.map((item)=>{
            if(item.title && item.character){
                return(
                    <div key={item.id} style={{display:"flex"}}>
                        <ul style={{paddingLeft:"0px"}}>
                            <li style={{display:"flex"}}>
                            <h5 style={{fontWeight:"700", fontSize:"1em"}}>{item.title}</h5><h5 style={{fontWeight:"400", fontSize:"1em"}}><span style={{fontWeight:"800", fontSize:"1em" , color:"red"}}>&nbsp;as&nbsp;</span>{item.character}</h5>
                            </li>
                        </ul>
                    </div>
                )
            }
        })
        return (
            <div className="container" id="profile_container">
                <div>
                    <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${this.state.data.profile_path}`} className="card-img-top" style={{width:"300px", height:"450", borderRadius:"10px"}} alt="..." />
                    <h3 style={{marginTop:"10px" , fontWeight:"800",fontSize:"1.8em" }}>Personal Info</h3>
                    <h5 style={{fontWeight:"600" , fontSize:"1.2em" , marginBottom:"2px"}}>Known For</h5>
                    <p>{this.state.data.known_for_department}</p>
                    <h5 style={{fontWeight:"600" , fontSize:"1.2em" ,marginBottom:"2px"}}>Known Credits</h5>
                    <p>Unknown</p>
                    <h5 style={{fontWeight:"600" , fontSize:"1.2em" ,marginBottom:"2px"}}>Gender</h5>
                    <p>{gender()}</p>
                    <h5 style={{fontWeight:"600" , fontSize:"1.2em",marginBottom:"2px"}}>Birthday</h5>
                    <p>{this.state.data.birthday}</p>
                    <h5 style={{fontWeight:"600" , fontSize:"1.2em",marginBottom:"2px"}}>Place Of Birth</h5>
                    <p>{this.state.data.place_of_birth}</p>
                    <h5 style={{fontWeight:"600" , fontSize:"1.2em",marginBottom:"2px"}}>Also Known As</h5>
                    {known}
                </div>
                <div style={{width:"80%"}} className="container">
                    <div  style={{fontWeight:"700", fontSize:"2.2rem", marginBottom:"1rem"}}>{this.state.data.name}</div>
                    <div style={{fontWeight:"700", fontSize:"1.5rem", marginBottom:"0.5rem"}}>Biography</div>
                    <div>{this.state.data.biography}</div>
                    <div id ="known_for">
                        <h1 style={{fontWeight:"700", fontSize:"1.5rem", marginTop:"20px", marginBottom:"5px"}}>Known For</h1>
                        <div id="known_for_scroller" style={{overflowX:"scroll", overflowY:"hidden", display:"flex"}}>
                                {people_credit}
                        </div>
                    </div>
                    <div style={{fontWeight:"700", fontSize:"1.5rem", marginBottom:"0.5rem", marginTop:"1rem"}}>Acting</div>
                    {movies_and_tv}
                </div>
            </div>
        )
    }
    
}

export default Profile
