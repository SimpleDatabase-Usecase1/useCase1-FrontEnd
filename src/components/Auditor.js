import React, {useState} from 'react'
import NavBar from './NavBar'

function Auditor() {

  const initialText = 'This is the auditor page. Double click to edit this text';
  const [textValue, setTextValue] = useState(JSON.parse(sessionStorage.getItem('auditorState')) || initialText);
  const [isEditMode, setIsEditMode] = useState(false);

  var getRole = sessionStorage.getItem("role");
  //cancel the edit field
  const checkEditMode = () => {
    setIsEditMode(!isEditMode);
  }

  //update the text with target text
  const handleChange = (event) => {
    sessionStorage.setItem('auditorState', JSON.stringify(event.target.value));
    setTextValue(event.target.value);
  }

  return (
    <div>
      <NavBar/>

      <h3>Welcome to the Auditor Page</h3>
      
      <br/>

      {getRole === 'root' || getRole === 'auditor' ?
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
      <p>This is the Home Page</p>
      }
    </div>
  )
}

export default Auditor