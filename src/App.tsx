import React from 'react';
import './App.css';
import InputNums from './components/InputNums';
import {RecoilRoot} from 'recoil';
import {Route, Router, Routes, useNavigate} from 'react-router-dom';
import Result from './components/Result';

function App() {
  const navigate = useNavigate();
  const handleButton = () => navigate('/result');
  return (
    <>
      <RecoilRoot>
        <Route path='/' element={<InputNums onButtonClick={handleButton} />} />
        <Route path='/result' element={<Result />}></Route>
      </RecoilRoot>
    </>
  );
}

export default App;
