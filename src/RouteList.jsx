import { Routes, Route, Navigate } from "react-router-dom";
import ColorsList from "./ColorsList";
import FilterColorDetails from './FilterColorDetails';
import ColorNew from "./ColorNew";

function RouteList({colors, addColor}) {
  
  return (
    <Routes>
      <Route
        path="/colors"
        element={<ColorsList colors={colors} />} 
      />

      <Route
        path="/colors/:name"
        element={<FilterColorDetails colors={colors} />} 
      />

      <Route
        path="/colors/new"
        element={<ColorNew addColor={addColor}/>} 
      />
      
      <Route
        path="/*"
        element={<Navigate to="/colors" />}
      />

    </Routes>
  )
}

export default RouteList;