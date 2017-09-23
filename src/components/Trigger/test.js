import React from 'react';
import { shallow } from 'enzyme';
import { Trigger } from './';
import { createStore } from "redux";
import { combineReducers } from "redux-immutable";
import { reducer as notificationsReducer } from "../../data/notifications/reducer";

it('renders without crashing', () => {
  shallow(
    <Trigger store={ createStore(combineReducers({ notifications: notificationsReducer })) } />
  );
});

it("handles body input changes", () => {
  const trigger = shallow(
    <Trigger store={ createStore(combineReducers({ notifications: notificationsReducer })) } />
  );

  const header = trigger.find('#header').first();
  const body = trigger.find('#body').first();
  const type = trigger.find('#type').first();

  expect(header.text()).toEqual('');
  expect(body.text()).toEqual('');
  expect(type.props().value).toEqual('info');

  header.simulate('change', { target: { name: "header", value: 'new value' } });
  expect(trigger.state("newNotification").get("header")).toEqual('new value');

  body.simulate('change', { target: { name: "body", value: 'new value' } });
  expect(trigger.state("newNotification").get("body")).toEqual('new value');

  type.simulate('change', { target: { name: "type", value: 'error' } });
  expect(trigger.state("newNotification").get("type")).toEqual('error');
});
