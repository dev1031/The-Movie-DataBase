import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Logout from './Pages/Logout'
import Register from './Pages/Register';
import Footer from './components/Footer';
import M_Popular from './components/Movies/M_Popular';
import M_Upcoming from './components/Movies/M_Upcoming';
import M_TopRated from './components/Movies/M_TopRated';
import M_NowPlaying from './components/Movies/M_NowPlaying';
import M_Details from './components/Movies/M_Details';
import TV_Popular from './components/TV/TV_Popular';
import TV_Airing from './components/TV/TV_Airing';
import TV_OnTv from './components/TV/TV_OnTv';
import TV_TopRated from './components/TV/TV_TopRated';
import TV_Details from './components/TV/TV_Details';
import Dashboard from './Pages/Dashboard';
import P_Popular from './components/P_Popular';
import Profile from './components/People/Profile';
import Discuss from './components/More/discuss';
import Search from './Pages/Search';

function App() {
  return(
    <Router>
    <Navbar />
      <Switch>
        <Route exact path = '/'><Home /></Route>
        <Route exact path = '/login'  component={ Login} />
        <Route exact path = '/register' component = { Register}/>
        <Route exact path = '/movie' component ={ M_Popular } />
        <Route exact path = '/now-playing' component ={ M_NowPlaying } />
        <Route exact path = '/upcoming' component ={ M_Upcoming } />
        <Route exact path = '/top-rated' component ={ M_TopRated } />
        <Route exact path = '/movie/:movie_id' component ={ M_Details } />
        <Route exact path = '/tv' component ={ TV_Popular } />
        <Route exact path = '/airing-today' component ={ TV_Airing } />
        <Route exact path = '/on-tv' component ={ TV_OnTv } />
        <Route exact path = '/tv_top-rated' component ={ TV_TopRated } />
        <Route exact path = '/tv/:tv_id' component ={ TV_Details } />
        <Route exact path ='/person' component ={ P_Popular } />
        <Route exact path ='/people/:person_id' component ={ Profile} />
        <Route exact path ='/discuss' component ={ Discuss } />
        <Route exact path = '/logout'  component={ Logout} />
        <Route exact path ='/search/:query' component ={ Search} />
        <Route exact path ='/dashboard' component ={ Dashboard } />
        {localStorage.getItem('token') && (<Route exact path = '/dashboard' component={ Dashboard }/>)}
      </Switch>
    <Footer />  
    </Router>
  )
}


export default App;
