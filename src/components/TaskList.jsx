import React from 'react' 

import Task from './Task'

const TaskList = ( {task, del} ) => {

    let tasks = task.map(( {text, key, important } ) => {
        return (
        <Task 
            text={text} 
            key={key} 
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