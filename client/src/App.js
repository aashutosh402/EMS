import logo from './logo.svg';
import './App.css';
import { Adminlogin } from './Adminlogin';
import {Router,BrowserRouter,Routes,Route} from 'react-router-dom'
import { Adminsignup } from './Adminsignup';
import {Dashboard} from './Dashboard'
import { AddProject } from './AddProject';
import { AddEmployee } from './AddEmployee';

function App() {
  return (
    <div >
     
    {/* <Adminsignup/> */}
     <BrowserRouter>
    <Routes>
          <Route path="/" element={<Adminlogin />} />

    </Routes>
        <Routes>
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/addemployee" element={<AddEmployee />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
