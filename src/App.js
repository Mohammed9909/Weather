import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MyList from './List/MyList';



class App extends Component {

  constructor(props) {
    super()
  }


  render() {

    return (
      <div>
      <Router>
       <div>
        <nav>
          {/* <Link className="pressed" to='/'>Home Page</Link>{'  '} */}
          <Link to='/mylist'>My List</Link>{'  '}
          {/* <Link to='/About'>About Page</Link>  */}
        </nav>
        <div>
          <Switch>
            {/* <Route exact path='/' component={HomePage} /> */}
            <Route path='/mylist' component={()=> <MyList theList={this.props.theList}/>} />
            {/* <Route component={Errors} /> */}
          </Switch>
        </div>
        </div>
        </Router>
        
          <h1>{this.props.title}</h1>
          {/* {authors} */}
          
           <h3>Comments:</h3>
           {/* <Comment body={this.props.comments[0]} /> */}
          
          </div>
      
    );
  }
}

export default App;
