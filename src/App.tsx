import React from 'react';
import './App.css';
import InputNums from './components/InputNums';
import {RecoilRoot} from 'recoil';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Result from './components/Result';

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<InputNums />} />
            <Route path='/result' element={<Result />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
