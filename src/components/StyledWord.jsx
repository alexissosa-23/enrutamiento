import React from 'react';

const StyledWord = ({ word, color, bgColor }) => {
    const style = {
        color: color,
        backgroundColor: bgColor
    };

    return <h1 style={style}>The word is: {word}</h1>;
};

export default StyledWord;
