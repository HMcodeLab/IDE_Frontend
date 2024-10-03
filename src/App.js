import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestApp from './Components/Enterancepage/AssessmentPage';
import DeviceCheckPage from './Components/Modules/DeviceCheckModal/DeviceCheckModal';
import NewQuestion from './Components/newpatternquestion';
import Submittedassessment from './Components/Submittedpage/submitassessment';
import Suspended from './Components/Submittedpage/suspended';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<TestApp/>}/>
      <Route path='/hardwarechecking' element={<DeviceCheckPage/>}/>
      <Route path='/question' element={<NewQuestion/>}/>
      <Route path='/submitted' element={<Submittedassessment/>}/>
      <Route path='/suspended' element={<Suspended/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
