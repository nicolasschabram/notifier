import { reducer } from "./reducer";
import * as actions from "./actions";
import uid from "uid";
import { List, fromJS } from "immutable";

describe("actions", () => {
  it("should create an action to add a notification", () => {
    const header = "header text";
    const body = "body text";
    const type = "error";

    const expectedAction = {
      type: actions.ADD,
      header: header,
      body: body,
      notificationType: type
    };
    expect(actions.addNotification(header, body, type)).toEqual(expectedAction);
  });

  it("should create an action to close a notification", () => {
    const id = uid(10);

    const expectedAction = {
      type: actions.CLOSE,
      id: id
    };
    expect(actions.closeNotification(id)).toEqual(expectedAction);
  });
});

describe("reducers", () => {
  it("should handle ADD", () => {
    const newNotification = reducer(List(), {
      type: actions.ADD,
      header: 'header test',
      body: 'body test',
      notificationType: 'error'
    }).get(0);

    expect(newNotification.get("header")).toEqual("header test");
    expect(newNotification.get("body")).toEqual("body test");
    expect(typeof newNotification.get("id")).toEqual("string");
    expect(newNotification.get("type")).toEqual("error");
    expect(newNotification.get("isOpen")).toEqual(true);
    expect(typeof newNotification.get("date").getMonth).toEqual("function");
  });

  it("should handle CLOSE", () => {
    const date = new Date();
    const newState = reducer(fromJS([{
      id: "hghghghghg",
      header: "header test",
      body: "body test",
      type: "error",
      isOpen: true,
      date: date
    }, {
      id: "hfjahsjeru",
      header: "header test",
      body: "body test",
      type: "error",
      isOpen: true,
      date: date
    }]), {
      type: actions.CLOSE,
      id: "hghghghghg"
    });

    const expectedState = fromJS([{
      id: "hghghghghg",
      header: "header test",
      body: "body test",
      type: "error",
      isOpen: false,
      date: date
    }, {
      id: "hfjahsjeru",
      header: "header test",
      body: "body test",
      type: "error",
      isOpen: true,
      date: date
    }]);

    expect(newState).toEqual(expectedState);
  });
});
