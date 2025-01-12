import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./Tododate";
import "./Todo.css";
// import { getLocalStorageTodoData, setLocalStorageTodoData, } from "./TodoLocalStorage";

const todoKey = "reactTodo";

export const Todo = () => {
    const [task, setTask] = useState(() => {
        // getLocalStorageTodoData();
        const rawTodos = localStorage.getItem(todoKey);
        if(!rawTodos) return [];
        return JSON.parse(rawTodos);
    });

    const handleFormSubmit = (inputValue) => { 
        const {id, content, checked} = inputValue;
        //* This check is for input field is empty or not
        if(!content) return;
        // * This part is for the Checking of the data is previously present or not.
        //! if(task.includes(content)) return;
        const ifTodoContentMatch = task.find((curTask) => curTask.content === content);
        if(ifTodoContentMatch) return;
        
        setTask((prevVal) => [...prevVal, {id, content, checked}]);  //* You may write like this. {id: id, content: content, checked: checked}
    };
    
    //! Add Data to LocalStorage
    // setLocalStorageTodoData(task);
    localStorage.setItem(todoKey, JSON.stringify(task));

    //! Todo handleDeleteTodo function
    const handleDeleteTodo = (value) => {
        const updateTask = task.filter((curTask) => curTask.content != value);
        setTask(updateTask);
    };

    //! Todo handleCheckedTodo function
    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if(curTask.content === content){
                return {...curTask, checked: !curTask.checked};
            }else{
                return curTask;
            }
        });
        setTask(updatedTask);
    };

    //! Todo handledeleteAllTodo function

    const handledeleteAllTodo = () => {
        setTask([]);
    };


    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate/>
            </header>
            <TodoForm onAddTodo = {handleFormSubmit}/>
            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask) => {
                        return (<TodoList key={curTask.id} data = {curTask.content}
                        checked = {curTask.checked}  onHandleDeleteTodo = {handleDeleteTodo} onHandleCheckedTodo = {handleCheckedTodo}
                        />
                        );
                    })}
                </ul>
            </section>
            <section className="clear-btn" onClick={handledeleteAllTodo}>
                Clear all
            </section>
        </section>
    );
};