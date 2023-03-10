import Login from './components/login-page';
import Otp from './components/otp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Test from './components/test';
import { Easy } from './components/easy';
import { Modurate } from './components/modurate';
import { Advance } from './components/advance';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Header } from './components/header';
import Stafflogin from './components/Loginforstaff/loginForStaff';
import Katresult from './components/CommunicationResult/communicationresult';
import { Dashnav } from './components/Dashboardnav/dashnav';
import {Check} from './components/CommunicationResult/communicationnn';
import { Results } from './components/easy';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element = {<Login/>}/>
    <Route path="/otp" element = {<Otp/>}/>
    <Route path='/test' element={<Test/>}/>
    <Route path='/questions/:user_registration_details_id' element={[<Dashnav/>,<Easy/>]}/>
    <Route path='/modurate' element={[<Dashnav/>,<Modurate/>]}/>
    <Route path='/advance' element={<Advance/>}/>
    <Route path='/stafflogin' element={<Stafflogin/>}/>
    <Route path='/communicationstaff' element={[<Dashnav/>,<Katresult/>]}/>
    <Route path='/aggrid' element={[<Dashnav/>,<Check/>]}/>
      
				
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
