import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import City from './List/City'


class Weather extends Component {

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
          main:main
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
 

  render() {
    const cityList = this.state.cities.map((city, index) => {
      return <City data={city} key={index}/>
    })
    return (
      <div className = 'bar'>
        <button onClick={this.clearList}>Delete All!</button>
        <input type="text"
          value={this.state.cityName}
          onChange={this.onTextBoxChange}
          placeholder="City Name" />

        <button onClick={this.Search} >Search</button>
      
        {cityList}

      </div>

    );
  }
}

export default Weather;
