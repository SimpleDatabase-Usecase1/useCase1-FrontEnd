import React, {useState} from 'react'

const EditText = (props) => {
    const [text, setText] = useState(props.header);

    const submit = (e) => {
        e.preventDefault();

        setText(text);
    }
  return (
    <form onSubmit={submit}>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Change Text'/>
        <button type='submit'></button>
    </form>
  )
}

export default EditText