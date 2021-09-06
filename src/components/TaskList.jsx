import React from 'react' 

import Task from './Task'

const TaskList = ( {task, del} ) => {

    let tasks = task.map(( {text, k, important } ) => {
        return (
        <Task 
            text={text} 
            k={k} 
            key = { Math.round( Math.random() * 10000000000 ) }
            important={important} 
            del={del} />
    )})


    return (

        <>
            {tasks}
        </>
    )


}

export default TaskList