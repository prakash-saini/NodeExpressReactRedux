import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import SignUp from './components/SignUp/SignUp';
import EditFertigationPlan from './components/EditFertigationPlan/EditFertigationPlan';
import FertigationPlan from './components/FertigationPlan/FertigationPlan';

function App() {
  return (
   <Router>
     <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<SignUp/>}></Route>
          <Route path='/editfertigationplan' element={<EditFertigationPlan/>}></Route>
          <Route path='/viewfertigationplan' element={<FertigationPlan/>}></Route>
        </Route>
     </Routes>
   </Router>
  );
}

export default App;
