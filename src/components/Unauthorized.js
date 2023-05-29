import React from 'react'
import { useNavigate } from 'react-router-dom'

const Unauthorized = () => {
    const navigate = useNavigate();
  return (
    <section>
        <h2> Unauthorized </h2>
        <p>You do not have access to the requested page</p>
        <div>
            <button type='button' onClick={() => navigate(-1)}>Go Back Home</button>
        </div>
    </section>
  )
}

export default Unauthorized
