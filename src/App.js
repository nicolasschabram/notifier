import React from "react";
import Trigger from "./components/Trigger";
import Notifications from "./components/Notifications";

import 'normalize.css';
import './styles.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Trigger />
        <Notifications />
      </div>
    );
  }
}

export default App;
