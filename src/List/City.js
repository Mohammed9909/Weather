import React, { Component } from 'react'

export default class City extends Component {
    render() {
        return (
            <div className="bar">
            <h2>{this.props.data.country} - {this.props.data.cityName}   {this.props.data.weather.toFixed(0)}°C  {this.props.data.main}</h2>
            </div>
        )
    }
}
