import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
        this.tick = this.tick.bind(this);
    }

    render() {
        return (
            <div className="clock">
                <h1>Clock</h1>
                <ul className="clockWidget">
                    <li><span>Time:</span> <span>{this.state.time.toLocaleTimeString()} EDT</span></li>
                    <li><span>Date:</span> <span>{this.state.time.toDateString()}</span></li>
                </ul>
            </div>
        )
    }

    tick() {
        this.setState({
            time: new Date(),
        })
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
}

export default Clock;