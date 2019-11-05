import React, { Component } from 'react'

export default class City extends Component {
    render() {
        return (
            <h3>{this.props.data.cityName}  {(this.props.data.country)} {this.props.data.weather.toFixed(1)}°C {this.props.data.main}</h3>

        )
    }
}
