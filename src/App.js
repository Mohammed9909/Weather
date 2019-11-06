import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import City from './List/City'
import { Button, Nav, NavDropdown, Navbar, Form, FormControl } from 'react-bootstrap';


class App extends Component {

  constructor() {
    super()
    this.state = {
      cityName: '',
      cityList: [],
      weather: '',
      weatherList: [],
      country: '',
      countryList: [],
      cities: []
    }
  }
  onTextBoxChange = (e) => {
    console.log('On Text Change', e.target.value);

    this.setState({
      cityName: e.target.value
    });
  }

  Search = (e) => {
    const cities = [...this.state.cities];

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&APPID=012692593491fb24c2a5e017bb7649fa`)
      .then((res) => {
        console.log(res.data);

        const cityName = res.data.name;
        const weather = res.data.main.temp - 273.15;
        const country = res.data.sys.country;
        const main = res.data.weather[0].main
        const city = {
          cityName: cityName,
          weather: weather,
          country: country,
          main: main
        }

        cities.push(city);

        this.setState({
          cities: cities
        })
      })
      .catch(() => {
        console.error();
      })

    this.setState({
      cityName: '',

    });

  }
  clearList = (e) => {
    this.setState({
      cities: []
    });
  }

  // changeBody(e) {
  //   let newBody = prompt("What should the city be?")
    
  //     this.state.Search= newBody
    
  // }

  render() {
    const cityList = this.state.cities.map((city, index) => {
      return <City data={city} key={index} />
    })
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">WEATHER</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href="#action/3.3" onClick={this.changeBody}>Edit Body</NavDropdown.Item> */}
                <NavDropdown.Item href="#action/3.4" onClick={this.clearList}>Delete All!</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.cityName}
                onChange={this.onTextBoxChange} />
              <Button variant="outline-success" onClick={this.Search}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        {cityList}
      </div>
    );
  }
}

export default App;
