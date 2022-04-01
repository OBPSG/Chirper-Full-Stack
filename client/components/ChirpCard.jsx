import React from 'react'

const ChirpCard = ({username, message, created}) => {
    return (
        <>
            <div className="border border-secondary">
                <h3>{username}</h3>
                <p>{message}</p>
                <small>{created}</small>
            </div>
        </>
    )
}

export default ChirpCard;