import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
  return (
    <div>
      <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        backgroundColor: "slategray",
        width: '100vw',
        height: '30vh',
      }}>
        <h2>Welcome to the color factory.</h2>
        <button style={{color: "grey"}}><Link to={'/colors/new'}>Add a Color</Link></button>
      </div>
      <div>
        <h3>Please select a color.</h3>
        <ul style={{listStyleType: "none", padding: '0', margin: '0'}}>
          {colors.map(({ name, color }, idx) => (
            <li key={idx}>
              <Link to={`/colors/${name}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ColorList;