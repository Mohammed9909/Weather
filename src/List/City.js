import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class City extends Component {

    render() {
        const icons = {
            Clear: '☀',
            Rain: '️🌧',
            Storm: '⛈',
            Snow: '🌨',
            Mist: '🌫',
            Clouds: '☁',
        };
        return (
            <div className="bar">

                <h2><Button variant="outline-success" onClick={() => this.props.changeBody(this.props.data)}> Edit City </Button> <Button variant="outline-danger" onClick={() => this.props.deleteone(this.props.data)}>delete</Button> {this.props.data.country} - {this.props.data.cityName}   {this.props.data.weather.toFixed(0)}°C  {icons[this.props.data.main]}</h2>
            </div>
        )
    }
}
