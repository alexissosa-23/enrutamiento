import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Home from './components/Home';
import NumberDisplay from './components/NumberDisplay';
import WordDisplay from './components/WordDisplay';
import StyledWord from './components/StyledWord';

const App = () => {
    const ParamHandler = () => {
        const { param, color, bgColor } = useParams();
        if (isNaN(param)) {
            if (color && bgColor) {
                return <StyledWord word={param} color={color} bgColor={bgColor} />;
            } else {
                return <WordDisplay word={param} />;
            }
        } else {
            return <NumberDisplay number={param} />;
        }
    };

    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/:param" element={<ParamHandler />} />
                <Route path="/:param/:color/:bgColor" element={<ParamHandler />} />
            </Routes>
        </div>
    );
};

export default App;
