import React from 'react'
import {Link} from "react-router-dom";

const ChirpCard = ({id, username, message, created}) => {
    return (
        <>
            <div className="border border-secondary">
                <h3>{username}</h3>
                <p>{message}</p>
                <small>{created}</small>
                {/* <button className="btn btn-secondary">Details</button> */}
                <Link className="btn" to={`/chirpDetails/id`}>Edit Details</Link>
            </div>
        </>
    )
}

export default ChirpCard;