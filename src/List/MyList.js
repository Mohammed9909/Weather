import React, { Component } from 'react';
import ToDoList from './ToDoList'


class MyList extends Component {
  constructor(props) {
    super(props);

    // Initial state copied from component props.
    this.state = {
      toDoItems: this.props.theList,
      newItem: '',
      body: props.body
    }
  }

  clearList = (e) => {
    this.setState({
      toDoItems: []
    });
  }

  onTextBoxChange = (e) => {
    console.log('On Text Change', e.target.value);

    this.setState({
      newItem: e.target.value
    });
  }
  addItem = (e) => {
    console.log('Add Item');
    this.setState({
      toDoItems: [...this.state.toDoItems, this.state.newItem],
      newItem: ''
    });
  }
  changeBody(e) {
    let newBody = prompt("What should the new body be?")
    this.setState({
      body: newBody
    })
  }
  render() {

    return (
      <div>
        {/* My JSX Comment */}
        <h1>Things I should start doing:</h1>
        <ToDoList toDoItems={this.state.toDoItems} />
        <br />

        <input type="text"
          value={this.state.newItem}
          onChange={this.onTextBoxChange}
          placeholder="Type a task here!" />

        <button onClick={this.addItem}>Add Task!</button>

        <br />

        <div>
          <p>{this.state.body}</p>
          <button onClick={(e) => this.changeBody(e)}>Edit Body</button>
        </div>

        <button onClick={this.clearList}>
          Delete All!
        </button>
      </div>
    )
  }
}

export default MyList;