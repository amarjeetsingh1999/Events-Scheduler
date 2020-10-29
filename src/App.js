import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';

import Header from './Components/Header';
import Adder from './Adder';
import Viewer from './Viewer';
import Footer from './Components/Footer';

class App extends Component {
  state = {
    inserting: null,
  };

  render() {
    const { inserting } = this.state;

    return (
      <div className="main-container">
        <Header title="SCHEDULES" />

        <div className="button-container">
          <Button
            className="my-2"
            size= "lg"
            style= {{"backgroundColor": "#000205"}}
            onClick={() => this.setState({ inserting: {} })}
          >
            Add Schedule
          </Button>
        </div>

        <Viewer />

        {inserting && (
          <Adder
            schedule={inserting}
            onClose={() => this.setState({ inserting: null })}
          />
        )}

        <Footer />
      </div>
    );
  }
}

export default App;
