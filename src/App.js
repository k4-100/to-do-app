import React, { useState } from 'react';

import Form from './components/Form'
import TaskList from './components/TaskList'

const App = () => {

  const [ important, setImportant ] = useState(false);
  let [ value, setValue ] = useState('') 
  let [ task, setTask] = useState([]);

  const handleAddValue = (e) => {
    setValue(e.target.value)
  }

  const handleAddButton = () => { 
    if (value !== '') {
      const newTasks = [...task, {text: value, k: task.length, important: important}]
      setTask(newTasks)
      setValue('')
  } else {
      alert('Write your task before adding to list')
   }
  }

  const handleCheckBox = () => {
    setImportant( !important )
  }

  const handleDeleteButton = (k) => {
    console.log('seks')
    let tasks = [...task]
    const NewTaks = tasks.filter(task => k !== task.k)
    setTask(NewTaks)
  }

  return (
    <>
      <Form 
        value={value}
        onchange={handleAddValue}
        onclick={handleCheckBox}
        button={handleAddButton} 
        important={important} 
        />
      <TaskList
        task={task}
        del={handleDeleteButton}
      />
    </>
  );
}

export default App;
