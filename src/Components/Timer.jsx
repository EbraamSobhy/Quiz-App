    import React, { Component } from "react";
    import '../App.css';

    class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        timeLeft: 60,
        };
    }

    componentDidMount() {
        this.timer = setInterval(this.updateTimer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    updateTimer = () => {
        const { timeLeft } = this.state;

        if (timeLeft > 0) {
        this.setState({ timeLeft: timeLeft - 1 });
        } else {
        clearInterval(this.timer);
        alert("Time is up!");
        this.closeApp();
        }
    };

    closeApp = () => {
        // Attempt to close the window/tab
        window.close();
        
        // If the window.close() method is restricted by the browser,
        // you can consider redirecting to a blank page to simulate closing
        // window.location.href = "about:blank";
    };

    render() {
        const { timeLeft } = this.state;

        return (
        <div className="timer">
            Time: <span id="countdown">{timeLeft}</span> Seconds
        </div>
        );
    }
    }

    export default Timer;
    