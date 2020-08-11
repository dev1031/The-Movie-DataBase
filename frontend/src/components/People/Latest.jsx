import React  from 'react';
import { API_URL, API_KEY } from '../../config/config'
import avatar from '../../img/avatar.jpg'

class Latest extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data : ''
        }
    }

    componentDidMount(){
        fetch(`${API_URL}person/latest?api_key=${API_KEY}`)
        .then((response)=> response.json())
        .then((response)=> this.setState({
            data: response.name
        }))
    }
    render(){
        return(
            <div style={{ width : "15rem"}} >
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                 <div className="card" >
                    <img src={avatar} style={{height : "200px" , width : "200px" }} alt="..." />
                        <div className="card-body">
                           <a href ={"anchor"} style ={{textDecoration :"none"}}> <h5 className="card-title" style={{fontWeight :"700"}}>{this.state.data}</h5></a>
                        </div>
                  </div>
                </div>
                </div>
        )
    }
}

export default Latest;