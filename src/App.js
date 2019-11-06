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
    const cName = this.state.cityName ? this.state.cityName : e;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cName}&APPID=012692593491fb24c2a5e017bb7649fa`)
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

  deleteone = (city) => {
    let cities = [...this.state.cities]
    let index = cities.indexOf(city)
    cities.splice(index, 1)
    this.setState({
      cities: cities
    })

  }
  changeBody = (city) => {
    const cities = [...this.state.cities]
    let index = cities.findIndex(city2 => {
      return city2.cityName === city.cityName;
    });
    cities.splice(index, 1)
    this.setState({
      cities: cities
    })
    let newBody = prompt("What should the city be?");

    setTimeout(() => this.Search(newBody), 1000);
  }

  render() {
    const cityList = this.state.cities.map((city, index) => {
      return <City deleteone={this.deleteone} changeBody={this.changeBody} data={city} key={index} />
    })
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">WEATHER ☀</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavDropdown.Divider />
                <Button variant="btn btn-danger" onClick={this.clearList}>Delete All!</Button> 
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.cityName}
                onChange={this.onTextBoxChange} />
              <Button variant="outline-success" onClick={this.Search}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <footer className="footer">
      <div className="container">
        <div className="text-muted">Created by Mohammed Al-Ofaysan</div>
      </div>
    </footer>
        {cityList}
      </div>
    );
  }
}

export default App;
