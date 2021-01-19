import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const ToDoList = (props) => {
    const [line, setline] = useState(false);

    const cutIt = () => {
        setline(true);
    }
    return (
        <>
            <div className="todo_style">
                <span className="style" onClick={cutIt}>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </span>
                <span className="style"><li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}</li></span>
            </div>
        </>
    );
}

export default ToDoList;