import { withRouter } from 'react-router-dom';

function Logout(){
    localStorage.clear();
    window.location ='/login';
}

export default  withRouter(Logout);
