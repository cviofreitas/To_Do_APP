import React, { useState, useEffect } from 'react';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import "./ToDoList.css"

const dataFromLocalStorage = JSON.parse(localStorage.getItem("ToDos"))
const ToDoList = () => {
    const [ToDos, setToDos] = useState(dataFromLocalStorage ? dataFromLocalStorage : '')
    console.log(ToDos)
    const addTask = (newToDo) => {
        setToDos(tasks => [...tasks, newToDo])
    }

    const removeTask = (id) => {
        console.log(id)
        setToDos(ToDos => ToDos.filter(task => task.id !== id))
    }

    const updateTask = (id, editedTask) => {

        let changedTask = (ToDos.filter(task => task.id === id))
        changedTask[0].task = editedTask
        console.log('updated')
        setToDos(ToDos => [...ToDos])

    }

    useEffect(() => {
        localStorage.setItem('ToDos', JSON.stringify(ToDos))
    }, [ToDos]);

    console.log(ToDos)
    return (
        <div className='MainContainer'>
            <ToDoForm addTask={addTask} />
            <div className='ToDoContainer'>
                <div className='ToDoList'>
                    {ToDos ? ToDos.map(todo => <ToDoItem
                        task={todo.task}
                        id={todo.id}
                        todo={todo}
                        removeTask={removeTask}
                        updateTask={updateTask}
                        key={todo.id} />) : <></>}
                </div>
            </div>
        </div>

    )
}

export default ToDoList;
