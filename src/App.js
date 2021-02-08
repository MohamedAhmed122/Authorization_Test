import './App.css';
import Navbar from './App/Components/Navbar/Navbar'
import SocialLogin from './App/Components/SocialLogin/SocialLogin'
import CustomInput from './App/Components/CustomInput/CustomInput'
import CustomButton from './App/Components/CustomButton/CustomButton'

function App() {
  return (
    <div className="App">
     <Navbar />
     <div style={{margin: 100}}>
      <SocialLogin /> 
      
     </div>
     <div style={{margin: 100}}>
     <CustomInput placeholder='type somithing here'  /> 
      
     </div>
     <div style={{margin: 100}}>
     <CustomButton title='GHello ' width={1000}  /> 
      
     </div>
     
    </div>
  );
}

export default App;
