import React from "react";
import { Navigate, useNavigate} from "react-router-dom";

const ColorDetail = ({ color }) => {
  const navigate = useNavigate();
  if (!color) {
    return <p>UHHHH</p>
  }
  return (
    <div style={{
      position: 'absolute',
      top: '0',
      right: '0',
      backgroundColor: `${color.color}`,
      width: '100vw',
      height: '100vh',
    }}>
      <h1>This is {color.name}</h1>
      <br />
      <h1>Isn't it beautiful?</h1>
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default ColorDetail;