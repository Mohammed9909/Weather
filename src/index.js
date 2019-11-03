import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyList from './List/MyList'

const toDos = [
    'Build a todo App',
    'Go home and plan to take over the world, every night!',
    'Make a list of stuff to do'
]
ReactDOM.render(<App theList = {toDos}/>, document.getElementById('root'));
