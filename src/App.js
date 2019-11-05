import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MyList from './List/MyList';
import Weather from './Weather'



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
          <Link to='/Weather'>Weather</Link> 
        </nav>
        <div>
          <Switch>
            {/* <Route exact path='/' component={HomePage} /> */}
            <Route path='/mylist' component={()=> <MyList theList={this.props.theList}/>} />
            <Route path='/weather' component={Weather} />
            {/* <Route component={Errors} /> */}
          </Switch>
        </div>
        </div>
        </Router>
        
          
          </div>
      
    );
  }
}

export default App;
