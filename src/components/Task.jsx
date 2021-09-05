import React from 'react';

const Task = ( {text, del, key, important} ) => {

    return (
        <>
            <p 
                style={important ? {color: "red"} : null} 
                key={key}>
                {text}
            </p>  
            <button onClick={del}>Delete</button>
        </>
    )
}


export default Task;