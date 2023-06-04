import React, { useState } from 'react'
import NavBar from './NavBar'

function Home() {

  const initialText = 'Double click to change text if you are an auditor';
  const [textValue, setTextValue] = useState(JSON.parse(sessionStorage.getItem('homeState')) || initialText);
  const [isEditMode, setIsEditMode] = useState(false);

  var getRole = sessionStorage.getItem("role");
  //cancel the edit field
  const checkEditMode = () => {
    setIsEditMode(!isEditMode);
  }

  //update the text with target text
  const handleChange = (event) => {
    sessionStorage.setItem('homeState', JSON.stringify(event.target.value));
    setTextValue(event.target.value);
  }

  return (
    <div>
      <NavBar/>

      <h3>Welcome to the Home Page</h3>
      
      <br/>

      {getRole === 'auditor' ?
      <div>
      {isEditMode ? 
        <div>
          <input type='text' id='message' value={textValue} onChange={handleChange}/>
          <button type='button' onClick={checkEditMode}>Ok</button>
        </div>
        :
        <div onDoubleClick={checkEditMode}>
          {textValue}
        </div>
      }
      </div>
      :
      textValue
      }
    </div>
  )
}

export default Home