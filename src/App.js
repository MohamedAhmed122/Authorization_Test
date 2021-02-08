import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './App/Components/Navbar/Navbar'

import RegisterPage from './App/Pages/RegisterPage/RegisterPage';
import LoginPage from './App/Pages/LoginPage/LoginPage'
import ConfirmEmailPage from './App/Pages/ConfirmEmailPage/ConfirmEmailPage';
import ReceiveEmailPage from './App/Pages/ReceiveEmailPage/ReceiveEmailPage'
import AddEmailPage from './App/Pages/AddEmailPage/AddEmailPage'
import EmailSentPage from './App/Pages/EmailSentPage/EmailSentPage'


function App() {
  return (
    <div className="App">
     <Navbar />
     <Switch>
       <Route exact path='/' component={RegisterPage}/>
       <Route exact path ='/login' component ={LoginPage}/>
       <Route exact path='/confirm-email' component={ConfirmEmailPage}/>
       <Route exact path='/receive-email' component={ReceiveEmailPage}/>
       <Route exact path='/add-email' component={AddEmailPage}/>
       <Route exact path='/sent-email' component={EmailSentPage}/>
     </Switch>
   
    </div>
  );
}

export default App;
