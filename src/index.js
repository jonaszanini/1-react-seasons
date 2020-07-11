import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    //Very first method to be called when a instance of this class is created.
    //Way to initialize State
    //It is going to automatically called with props object
    //We have to call super(props)
    //When calling constructor we are overiding the React.Component constructor method

    // constructor(props) {
    //     super(props);

    //     //This is the only time we do direct assignment to this.state
    //     this.state = { lat: null, errorMessage: "" };
    // }

    state = { lat: null, errorMessage: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (error) => this.setState({ errorMessage: error.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message="Please accept location request" />;
    }

    //render method always must be called in a Class
    render() {
        return <div className="border red">{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
