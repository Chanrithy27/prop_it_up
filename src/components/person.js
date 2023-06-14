import React, { useState } from 'react';

const PersonCard = (props) => {
    const [newAge, setNewAge ] = useState( props.initialAge );
    return (
        <div>
            <h1> { props.lastName }, { props.firstName } </h1>
            <p> Age: { newAge } </p>
            <p> Hair Color: {props.hairColor} </p>
            <button onClick = { (event) => setNewAge(newAge + 1)}> Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

// const PersonName = (props) => {
//     return (
//         <h1> { props.lastName}, { props.firstName } </h1>
//     )
// }

// const PersonAge = (props) => {
//     return (
//         <p> Age: { props.age } </p>
//     )
// }

// const PersonHairColor = (props) => {
//     return (
//         <p> Hair Color: { props.HairColor } </p>
//     )
// }

export default PersonCard;