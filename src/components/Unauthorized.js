import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./css/unauthorized.css";


const Unauthorized = () => {
    const navigate = useNavigate();
  return (
    <section>
        <h2> Unauthorized </h2>
        <p>You do not have access to the requested page</p>
        <div>
            <button type='button' className='btn btn-outline-secondary' onClick={() => navigate(-1)}>Go Back Home</button>
        </div>
    </section>
  )
}

export default Unauthorized
