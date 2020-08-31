import React, { Component } from 'react';
import TaskBoard from './boards/taskBoard/TaskBoard'

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is app</h1>
        <TaskBoard />
      </div>
    )
  }
}

export default App;
