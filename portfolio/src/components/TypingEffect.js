import React from 'react';
import Typewriter from 'react-typewriter-effect';

const TypingEffect = () => {
    const phrases = [
        "4th year student",
        "MERN developer",
        "C++ programmer",
        "Data Structures and Algorithms lover",
        "Music lover"
    ];

    return (
        <Typewriter
            onInit={( typewriter ) => {
                typewriter.typeString( "I'm a " )
                    .pauseFor( 500 )
                    .typeString( phrases[ 0 ] )
                    .deleteAll()
                    .typeString( phrases[ 1 ] )
                    .deleteAll()
                    .typeString( phrases[ 2 ] )
                    .deleteAll()
                    .typeString( phrases[ 3 ] )
                    .deleteAll()
                    .typeString( phrases[ 4 ] )
                    .start();
            }}
            options={{
                loop: true,
            }}
        />
    );
};

export default TypingEffect;