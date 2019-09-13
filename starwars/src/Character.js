import React from "react";

const Character = function Character(props) {
    
    const {array} = props;
    return (
        <>
        {
            array.map((element) => <div>name {element.name} height {element.height}</div>)
        }
        </>
    )
}

export default Character;