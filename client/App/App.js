import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {url: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Outage Checker</h2>
        </div>
        <p className="App-intro">
          <input type='text' name='site' value={this.state.value} placeholder='Enter site URL'></input>
          <button>Submit</button>
        </p>
      </div>
    );
  }
}

export default App;
