import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({data, checked, onHandleDeleteTodo, onHandleCheckedTodo}) => {

    const item_color = {
        backgroundColor: `${ checked? "#B4C424" : "#7FFFD4"}`,
    };
    return (
        <li className="todo-item" style={item_color}>
            <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
            <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}><MdCheck /></button>
            <button  className="delete-btn" onClick={() => onHandleDeleteTodo(data)}><MdDeleteForever /></button>
        </li>
    );
};