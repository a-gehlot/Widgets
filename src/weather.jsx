import React from "react";

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: null,
        }
    this.success = this.success.bind(this);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.success);
    }

    success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        let request = new XMLHttpRequest();
        request.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=76b79c91fb9f5776d71bb9eaceb2955f&units=imperial`)
        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                //Success
                this.setState({weather: JSON.parse(request.response)})
            } else {
                alert('There was an error finding Weather')
            }
        }
        request.send();
    }

    render() {
        return(
            <div className="weather">
                <h1>Weather</h1>
                <div className="weatherBox">
                    <ul>
                        <li>City: {this.state.weather ? this.state.weather.name : 'Loading...'}</li>
                        <li>Temp: {this.state.weather ? this.state.weather.main.temp : 'Loading...'}</li>
                        <li>Feels Like: {this.state.weather ? this.state.weather.main.feels_like : 'Loading...'}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Weather;