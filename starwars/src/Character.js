import React from "react";
import styled from 'styled-components';

const CharacterStyle = styled.div`
    text-align: center;
    // padding-left: 40px;
    h2{
        color: white;
    }
    p {
        color: black;
        opacity: 0.2;

        &:hover{
            font-size: 2rem;
            font-weight: bold;
            opacity: 1;
            cursor: pointer;
        }
    }
    `



const Character = function Character(props) {
    
    const {array} = props;
    return (
        <>
        {
            array.map((element) => 
            <CharacterStyle>
                <h2> {element.name} 
                </h2> 
               
                <p>
                HEIGHT:{element.height}
                </p>
            </CharacterStyle>)
        }
        </>
    )
}

export default Character;