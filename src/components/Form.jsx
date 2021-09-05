import React from 'react';

const Form = ({important, value, onclick, onchange, button}) => {

 return ( 
    <div>
     <input 
        type="text" 
        placeholder="Write your task..."
        onChange={onchange}
        value={value}>
      </input>
     <button onClick={button}>
        Add task
     </button>
     <input 
        type="checkbox" 
        value={important}
        onChange={onclick}>
      </input>
     <label>
        Is important
      </label>
     <hr />
    </div>
    )
}



export default Form;