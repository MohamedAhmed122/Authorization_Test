import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './App/Components/Navbar/Navbar'

import RegisterPage from './App/Pages/RegisterPage/RegisterPage';
import LoginPage from './App/Pages/LoginPage/LoginPage'


function App() {
  return (
    <div className="App">
     <Navbar />
     <Switch>
       <Route exact path='/' component={RegisterPage}/>
       <Route exact path ='/login' component ={LoginPage}/>
     </Switch>
   
    </div>
  );
}

export default App;
