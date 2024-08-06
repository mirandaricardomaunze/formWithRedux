import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Data from './FetchData/Data';
import Login from './Login/Login';
import Signup from './Signup/Sinup';




function App() {
  
  return (
    <div className="App">
      <Signup/>
     <Login/>
     <Data/>
    </div>
    
  );
}

export default App