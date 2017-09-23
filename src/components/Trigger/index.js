import React from "react";
import {connect} from "react-redux";
import { Map } from "immutable";
import "./styles.css";
import * as notificationActions from "../../data/notifications/actions";

export class Trigger extends React.Component {
  constructor(props) {
    super(props);
    this.emptyNotification = Map({ header: '', body: '', type: 'info' });
    this.state = { newNotification: this.emptyNotification };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const newNotification = this.state.newNotification.set(name, value);
    this.setState({newNotification});
  }

  handleSubmit(event) {
    event.preventDefault();
    const notification = this.state.newNotification;
    this.props.addNotification(
      notification.get("header"),
      notification.get("body"),
      notification.get("type")
    );
    this.setState({ newNotification: this.emptyNotification });
  }

  render() {
    let newNotification = this.state.newNotification;
    return (
      <section className="trigger">
        <form className="trigger__form" onSubmit={this.handleSubmit}>
          <label className="trigger__field-label" htmlFor="header">Header</label>
          <input className="trigger__field"
                 type="text"
                 placeholder="Header"
                 value={newNotification.get("header")}
                 name="header"
                 id="header"
                 onChange={this.handleChange}
                 required
          />
          <label className="trigger__field-label" htmlFor="body">Body</label>
          <textarea className="trigger__field"
                    placeholder="Body"
                    name="body"
                    id="body"
                    value={newNotification.get("body")}
                    onChange={this.handleChange}
                    required
          />
          <label className="trigger__field-label" htmlFor="type">Type</label>
          <select className="trigger__field"
                  required
                  name="type"
                  id="type"
                  onChange={this.handleChange}
                  value={newNotification.get("type")}
          >
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>
          <input type="submit" value="Trigger Notification" />
        </form>
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notifications: state.get("notifications")
  }
}

export default connect(
  mapStateToProps,
  {...notificationActions}
)(Trigger);
