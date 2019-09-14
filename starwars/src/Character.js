import React from "react";
import styled from 'styled-components';

const CharacterStyle = styled.div`
    padding-bottom: 300px;
    h3{
        color: white;
    }
    p {
        color: black;
        opacity: 0.2;

        &:hover{
            font-size: 1.5rem;
            font-weight: bold;
            opacity: 1;
            cursor: pointer;
        }
    }
    `;

const Character = function Character(props) {
    
    const {character} = props;
    return (
        <>
        {
            character.map((element) => 
            <CharacterStyle>
                <h3> {element.name} 
                </h3> 
               
                <p>
                HEIGHT:{element.height}
                </p>
                <p>
                    {element['eye_color']} eyed
                </p>
            </CharacterStyle>)
        }
        </>
    )
}

export default Character;