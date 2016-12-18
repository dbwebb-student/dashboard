import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    console.log(this.props);
  };

  fetchLog() {
    axios.get('https://dbwebb.se/irclog', response => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <div>
        <h3> Hej Anders! </h3>
        <button
          onClick={this.fetchLog.bind(this)}
        >
        Hämta ircloggen!
        </button>
        {
          this.props.ircLog.map(item => <h2> { item.name } </h2>)
        }
      </div>
    );
  }
}

export default connect(state => state)(App);
