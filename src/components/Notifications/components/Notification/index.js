import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import * as notificationActions from "../../../../data/notifications/actions";

import "./styles.css";

/**
 * A single notification.
 * Example:
 * ```html
 * <Notification
 *    id="hduehczfig"
 *    type="error"
 *    body="Body text"
 *    header="header text"
 * />
 * Notifications with type="info" automatically disappear after 90  seconds.
 * ```
 */
export class Notification extends React.Component {
  static displayName = "Notification";
  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    body: PropTypes.string,
    header: PropTypes.string.isRequired,
    closeNotification: PropTypes.func.isRequired
  }

  componentDidMount() {
    if (this.props.type === "info") {
      setTimeout(() => this.props.closeNotification(this.props.id), 90000);
    }
  }

  renderBody(text) {
    return <p className="notification__text">{text}</p>
  }

  render() {
    const liClass = classnames(
      "notifications__notification",
      "notification",
      "notification--" + this.props.type
    )

    let type;
    switch (this.props.type) {
      case 'info': type = 'Info: '; break;
      case 'warning': type = 'Warning: '; break;
      case 'error': type = 'Error: '; break;
      default: type = '';
    }

    return (
      <li className={liClass}
          key={this.props.id}
          onClick={this.props.type === "more" ?
            null :
            () => this.props.closeNotification(this.props.id)
          }
      >
        <h3 className="notification__title">{type}{this.props.header}</h3>
        {this.props.body ? this.renderBody(this.props.body) : null}
      </li>
    );
  }
}

export default connect(null, {...notificationActions})(Notification);
