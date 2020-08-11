import React from 'react';
import './Chip.css';
import randomColor from 'randomcolor';

class Chip extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : localStorage.getItem('email')
        }
    }
    render(){
        let color = randomColor();
    return(
           <a href ={'/dashboard'} style={{textDecoration:"none"}}><div className ="img" style={{backgroundColor:color}}>
               <h6>{ this.state.email.trim()[0].toLocaleUpperCase()}</h6>
            </div>
           </a>
        )
    }
}

export default Chip;