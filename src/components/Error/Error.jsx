import React from 'react';
import './Error.css'

const Error = ({ mensaje }) => {
    return (
        <div className="container_error">
            <h1>{mensaje}</h1>
        </div>
    )
}

export default Error
