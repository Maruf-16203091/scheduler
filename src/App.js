import React, { Component } from "react";
import Scheduler from "./components/Scheduler";
import Toolbar from "./components/Toolbar";
import "./App.css";

const data = [
  {
    start_date: "2024-02-20 6:00",
    end_date: "2024-02-20 8:00",
    text: "Meeting with Maruf",
    id: 1,
  },
  {
    start_date: "2024-02-24 10:00",
    end_date: "2024-02-24 18:00",
    text: "Meeting with Akif",
    id: 2,
  },
];

class App extends Component {
  state = {
    currentTimeFormatState: true,
    messages: [],
  };

  addMessage(message) {
    const maxLogLength = 5;
    const newMessage = { message };
    const messages = [newMessage, ...this.state.messages];

    if (messages.length > maxLogLength) {
      messages.length = maxLogLength;
    }
    this.setState({ messages });
  }

  logDataUpdate = (action, ev, id) => {
    const text = ev && ev.text ? ` (${ev.text})` : "";
    const message = `event ${action}: ${id} ${text}`;
    this.addMessage(message);
  };

  handleTimeFormatStateChange = (state) => {
    this.setState({
      currentTimeFormatState: state,
    });
  };

  render() {
    const { currentTimeFormatState, messages } = this.state;
    return (
      <div>
        <div className="tool-bar">
          <Toolbar
            timeFormatState={currentTimeFormatState}
            onTimeFormatStateChange={this.handleTimeFormatStateChange}
          />
        </div>
        <div className="scheduler-container">
          <Scheduler
            events={data}
            timeFormatState={currentTimeFormatState}
            onDataUpdated={this.logDataUpdate}
          />
        </div>
      </div>
    );
  }
}
export default App;
