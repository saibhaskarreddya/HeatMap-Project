import React from 'react';
import TwoDTable from './Screens/table';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './HomeScreen';
import Input from './Screens/input';
import Login from './Screens/Login';
import Api from './Screens/Api';
import Char from './Screens/Char';
import HeatmapChart from './Screens/HeatMap';
import MyComponent from './Screens/HeattMapp';

const App = () => {

  return (
    <div>
      <center>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/input' element={<Input />} />
            <Route path='/table' element={<TwoDTable />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Api' element={<Api />} />
            <Route path='/Char' element={<Char/>} />
            <Route path='/HeatmapChart' element={<HeatmapChart/>} />
            <Route path='/HeatmapChartt' element={<MyComponent/>} />



          </Routes>
        </BrowserRouter>
      </center>
    </div>

  )
}
export default App;
