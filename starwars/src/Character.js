import React from "react";

const Character = function Character(props) {
    
    const {array} = props;
    return (
        <>
        {
            array.map((a,b) => <div key={a}> name={b.name} height={b.height}</div>)
        }
        </>
    )
}

export default Character;