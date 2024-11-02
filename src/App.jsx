import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import './App.css'
/* import ColorsList from './ColorsList';
import ColorDetail from './ColorDetail';
import ColorNew from './ColorNew'; */
import RouteList from './RouteList';
import {v4 as uuidv4} from 'uuid'

function App() {
  const [colors, setColors] = useState([
    {
      name: 'red',
      color: '#FF0000',
    },
    {
      name: 'blue',
      color: '#0000FF'
    }
  ]);
  const addColor = (newColor) => {
    setColors(colors => [...colors, {...newColor, id: uuidv4() }]);
  };

  /* useEffect(() => {
    async function loadColors(){

      const response = await axios.get("http://localhost:5001/dogs")
      setColors({
        data: response.data,
        isLoading: false
      })
    }
    loadColors()
  }, [])

  if (colors.isLoading) {
    return <h1>Loading...</h1>
  } */
  return (
    <>
      <RouteList colors={colors} addColor={addColor}></RouteList>
      {/* <Routes>
        <Route path='/colors' element={<ColorsList colors={colors} />}/>
        <Route path='/colors/:color' element={<ColorDetail currentColor={currentColor} />}/>
        <Route path='/colors/new' element={<ColorNew addColor={addColor}/>}/>
        <Route path='*' element={<Navigate to='/colors'/>} />
      </Routes> */}
    </>
  );
};

export default App