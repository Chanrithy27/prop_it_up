import React from 'react';

const PersonCard = (props) => {
    return (
        <div>
            <h1> { props.lastName }, { props.firstName } </h1>
            <p> Age: { props.age } </p>
            <p> Hair Color: {props.hairColor} </p>
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