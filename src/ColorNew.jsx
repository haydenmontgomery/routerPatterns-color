import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const ColorNew = ({ addColor }) => {
  const navigate = useNavigate();
  const INITIAL_STATE = {
    name: '',
    color: '#000000'
  }

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    addColor({...formData});
    setFormData(INITIAL_STATE)
    navigate("/colors")
  }

  return (
    <div style={{
      position: 'absolute',
      top: '0',
      right: '0',
      background: 'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%',
      width: '100vw',
      height: '100vh',
    }}>
      <div style={{
        position: 'absolute',
        top: '30vh',
        right: '110vh',
      }}>
        <form onSubmit={handleSubmit} className="NewFormTodo">
          <label 
          htmlFor="name"
          style={{display: 'inline-block'}}
          >Color Name: </label>
          <input id="name"
          type="text" 
          name="name"
          placeholder="Enter a name for your color" 
          value={formData.name} 
          onChange={handleChange}
          />
          <br></br>
          <label 
          htmlFor="color"
          style={{display: 'inline-block'}}
          >Color Value: </label>
          <input id="color"
          type="color" 
          name="color"
          value={formData.color} 
          onChange={handleChange} 
          />
          <button>Create Color</button>
        </form>
      </div>
    </div>
  )
}

export default ColorNew;