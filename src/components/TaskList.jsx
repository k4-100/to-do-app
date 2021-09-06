import React from 'react' 

import Task from './Task'

const TaskList = ( {task, del} ) => {

    let tasks = task.map(( {text, k, important } ) => {
        return (
        <Task 
            text={text} 
            k={k} 
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