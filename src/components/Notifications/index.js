import React from "react";
import {connect} from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import PropTypes from "prop-types";
import { List } from "immutable";

import "./styles.css";
import Notification from "./components/Notification";

/**
 * A list of animated notifications.
 * Example:
 * ```html
 * <Notifications />
 * ```
 */
export class Notifications extends React.Component {
  static displayName = "Notifications";
  static propTypes = {
    notifications: PropTypes.instanceOf(List).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.limit = 5;
  }

  renderNotifications(notifications) {
    let slice;
    if (notifications.count() > this.limit) {
      slice = -4;
    }
    else {
      slice = -5;
    }

    return notifications.sort((a, b) => {
      return a.get("date") > b.get("date");
    }).slice(slice).map(notification => {
      return (
        <Notification header={notification.get("header")}
                      body={notification.get("body")}
                      type={notification.get("type")}
                      date={notification.get("date")}
                      id={notification.get("id")}
                      key={notification.get("id")}
        />
      );
    });
  }

  hasMoreThan(limit) {
    return this.props.notifications.count() >= limit + 1;
  }

  render() {
    return (
      <aside className="notifications">
        <ul className="notifications__list">
          <ReactCSSTransitionGroup
            transitionName={{
              enter: "notification--enter",
              appear: "notification--fade-in",
              leave: "notification--fade-out"
            }}
            transitionAppear={true}
            transitionEnterTimeout={1000}
            transitionAppearTimeout={1000}
            transitionLeaveTimeout={750}
          >
            {this.hasMoreThan(this.limit) ?
              <Notification header={this.props.notifications.count() - this.limit + 1 + " more notifications …"}
                            type="more"
                            key="more"
              /> : null
            }
            {this.renderNotifications(this.props.notifications)}
          </ReactCSSTransitionGroup>
        </ul>
      </aside>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notifications: state.get("notifications")
                        .filter(notification => notification.get("isOpen"))
  }
}

export default connect(mapStateToProps)(Notifications);
