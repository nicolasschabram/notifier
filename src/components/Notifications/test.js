import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from "immutable";
import { Notifications } from './';

it('renders a notification without crashing', () => {
  const store = fromJS({
    notifications: [{
      id: 'a7fh4ncs8d',
      header: 'Notification 1',
      body: 'This is the first info notification.',
      type: 'info',
      isOpen: true,
      date: new Date(2017, 5, 16, 17, 25)
    }]
  });
  shallow(<Notifications notifications={store} />);
});


it('renders many notifications without crashing', () => {
  const store = fromJS({
    notifications: [{
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
    }, {
      id: 'a7fh4ncf7z',
      header: 'Notification 3',
      body: 'And this is an error notification. It has a very long body message and might span multiple lines. The layout should know how to handle this.',
      type: 'error',
      isOpen: true,
      date: new Date(2017, 5, 16, 17, 22)
    }, {
      id: 'a7fh4ncf6z',
      header: 'Notification 3',
      body: 'And this is an error notification. It has a very long body message and might span multiple lines. The layout should know how to handle this.',
      type: 'error',
      isOpen: true,
      date: new Date(2017, 5, 16, 17, 21)
    }, {
      id: 'a7fh4ncf5z',
      header: 'Notification 3',
      body: 'And this is an error notification. It has a very long body message and might span multiple lines. The layout should know how to handle this.',
      type: 'error',
      isOpen: true,
      date: new Date(2017, 5, 16, 17, 20)
    }, {
      id: 'a7fh4ncf4z',
      header: 'Notification 3',
      body: 'And this is an error notification. It has a very long body message and might span multiple lines. The layout should know how to handle this.',
      type: 'error',
      isOpen: true,
      date: new Date(2017, 5, 16, 17, 19)
    }]
  });
  shallow(<Notifications notifications={store} />);
});

it('renders zero notifications without crashing', () => {
  const store = fromJS({ notifications: [] });
  shallow(<Notifications notifications={store} />);
});
