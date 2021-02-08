import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './App/Components/Navbar/Navbar'

import RegisterPage from './App/Pages/RegisterPage/RegisterPage';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Switch>
       <Route exact path='/' component={RegisterPage}/>
     </Switch>
   
    </div>
  );
}

export default App;
