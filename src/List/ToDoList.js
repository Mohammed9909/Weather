import React from 'react';
import ListItem from './ListItem'


 
  
  const ToDoList = props => {
    const allTasks = props.toDoItems.map(function (task, index) {
      return (<ListItem doThis={task} key={index} />);
    });

    return (
        <ul>
          {allTasks}
        </ul>

    );
}

export default ToDoList;