import React from 'react';

const Task = ( {text, del, k, important} ) => {
    
    return (
        <>
            <p 
                style={important ? {color: "red"} : null} 
                k={k}>
                {text}
            </p>  
            <button onClick={ ()=> del(k) }>Delete</button>
        </>
    )
}


export default Task;