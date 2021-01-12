import React from 'react';
import Option from './Option';
import OptionTwo from './OptionTwo';
import { useSelector } from 'react-redux';

const Display = () => {
    const { level } = useSelector(({ DisplayCard }) => DisplayCard )
    return(
        <div>
           { level === "firstCard" && <Option/> }
           { level === "secondCard" && <OptionTwo/> }
        </div>
    )
}

export default Display;