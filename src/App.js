import react from 'react'
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import {Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  return  (<>
    <Navbar/>
    <switch>   
      <Route exact path = '/' component = {Home}/>
      <Route exact path = '/rooms/' component = {Rooms}/>
      <Route exact path = '/rooms/:slug' component = {SingleRoom}/>
      <Route component = {Error}/>
    </switch>
    
  </>)
    
  }

export default App;
