import { ADD, CLOSE } from "./actions";
import { fromJS, Map } from "immutable";
import uid from "uid";

const initialState = fromJS([{
  id: "a7fh4ncs8d",
  header: "We've received your order.",
  body: "Dear John, thanks for putting your trust in us. Your order will be processed soon – we'll be in touch.",
  type: "info",
  isOpen: true,
  date: new Date(2017, 5, 16, 17, 23)
}, {
  id: "a7fh4ncs8f",
  header: "Please check your payment details!",
  body: "Hi John. There seems to be a problem with your credit card. We need you to provide us with a valid payment method, otherwise we'll have to cancel the order.",
  type: "warning",
  isOpen: true,
  date: new Date(2017, 5, 16, 17, 24)
}, {
  id: 'a7fh4ncf8z',
  header: "Your order has been cancelled.",
  body: "Hello John! It seems like we can't validate your payment details. Therefore, we were forced to cancel your order. Please check your credit card info and then make a new order.",
  type: "error",
  isOpen: true,
  date: new Date(2017, 5, 16, 17, 25)
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
