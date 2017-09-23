import { ADD, CLOSE } from "./actions";
import { fromJS, Map } from "immutable";
import uid from "uid";

const initialState = fromJS([{
  id: 'a7fh4ncs8d',
  header: 'Notification 1',
  body: 'This is the first info notification.',
  type: 'info',
  isOpen: true,
  date: new Date(2017, 5, 16, 17, 25)
}, {
  id: 'a7fh4ncs8f',
  header: 'Notification 2',
  body: 'This is another notification – this time a warning.',
  type: 'warning',
  isOpen: true,
  date: new Date(2017, 5, 16, 17, 24)
}, {
  id: 'a7fh4ncf8z',
  header: 'Notification 3',
  body: 'And this is an error notification. It has a very long body message and might span multiple lines. The layout should know how to handle this.',
  type: 'error',
  isOpen: true,
  date: new Date(2017, 5, 16, 17, 23)
}]);

export function reducer(state=initialState, action) {
  switch (action.type) {
    case ADD: {
      return state.push(Map({
        id: uid(10),
        header: action.header,
        body: action.body,
        type: action.notificationType,
        isOpen: true,
        date: new Date()
      }))
    }

    case CLOSE: {
      return state.update(
        state.findIndex(notification => {
          return notification.get("id") === action.id;
        }), item => {
          return item.set("isOpen", false);
        }
      );
    }

    default:
      return state;
  }
}
