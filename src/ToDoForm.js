import React, { useState } from 'react';
import nextId from "react-id-generator";
import './ToDoForm.css'

const ToDoForm = ({ addTask }) => {
    const INITIAL_STATE = { task: '', id: '' }

    const [input, setInput] = useState(INITIAL_STATE)
    const [required, setRequired] = useState(false)



    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput(data => ({
            ...data, [name]: value, id: nextId()
        }))
        setRequired(false)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        input.task.length !== 0 ? addTask(input) : notValid()
        setInput(INITIAL_STATE);

    }
    const notValid = () => {
        setRequired(true)
    }

    return (
        <div className='formContainer'>
            <form className='ToDoForm'>

                <input
                    type='text'
                    autoComplete='off'
                    value={input.task}
                    placeholder={required ? 'required' : 'to do'}
                    onChange={handleChange}
                    name='task'
                    id='task'
                    className={required ? 'form required' : 'form'}
                />
                <label htmlFor='task' />
                <button className='submitButton' onClick={handleSubmit}><b>+</b>     add</button>
            </form>

        </div>
    )
}

export default ToDoForm 