import React from "react"

const FriendCard = props => {

    return (
        <div className="card" key={props.id}>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default FriendCard