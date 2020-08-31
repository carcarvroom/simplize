import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/navbars/Sidebar'
import TaskBoard from './boards/taskBoard/TaskBoard'
import routes from "./routes.js";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Sidebar routes={routes}
        logo={{
            innerLink: "/admin/index",
            imgSrc: require("./assets/simplize-logo.png"),
            imgAlt: "..."
          }} />
        <h1>This is app</h1>
        <TaskBoard />
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
