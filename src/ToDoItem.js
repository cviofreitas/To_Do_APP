import React, { useState } from 'react';
import './ToDoItem.css'

const ToDoItem = ({ todo, task, id, removeTask, updateTask }) => {
    const [currentTask, setCurrentTask] = useState(task)

    // updates currentTask input
    const onChange = (event) => {
        const { value } = event.target
        setCurrentTask(value)
    };
    // checkbox logic
    const [checked, setChecked] = useState(false)
    const toggleClicked = () => {
        if (checked === false) {
            setChecked(true)

        }
        else if (checked === true) {
            setChecked(false)

        }
    }


    const [editable, setEditable] = useState(false)
    const editTask = () => {
        console.log('editTask')
        if (editable === false) {
            setEditable(true)

        }
        else if (editable === true) {
            setEditable(false)

        }
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        console.log('handlesubmit')
        editTask()
        updateTask(id, currentTask)
    }

    return (
        <div className={`task ${checked ? 'checked' : null}`} >
            {/* checkBox */}
            <div className={`checkbox ${checked ? 'checked' : ''}`} onClick={() => toggleClicked()} />

            {/* displays the task */}
            {editable ?
                <form className='editContainer'
                    onSubmit={handleSubmit}>
                    <input
                        id={id}
                        className='inputText focused'
                        value={currentTask}
                        onChange={onChange}
                        disabled={!editable}

                    />


                </form> : <p className='inputText'>{task}</p>}


            <div className='buttons'>

                {/* used to edit task */}

                {editable ?

                    <button className='button' onClick={handleSubmit}>
                        <img src={require('./images/check.png')} style={{
                            height: '30px'
                        }} />
                    </button>
                    :
                    <button className='button' onClick={() => editTask()}>
                        <img src={require('./images/edit.png')} style={{
                            height: '35px',
                        }} />
                    </button>
                }



                {/* used to remove task */}
                <button className='button' onClick={() => removeTask(id)}>
                    <img src={require('./images/trash-bin.png')} style={{ height: '30px' }} />
                </button>

            </div>

        </div>
    )
}

export default ToDoItem;