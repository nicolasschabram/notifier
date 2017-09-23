import React from 'react';
import { shallow } from 'enzyme';
import uid from "uid";
import { Notification } from './';

it('errors render without crashing', () => {
  const id = uid(10);
  shallow(
    <Notification header='Title'
                  body='Body text'
                  type="error"
                  date={new Date()}
                  id={id}
                  key={id}
    />
  );
});

it('infos render without crashing', () => {
  const id = uid(10);
  shallow(
    <Notification header='Title'
                  body='Body text'
                  type="info"
                  date={new Date()}
                  id={id}
                  key={id}
    />
  );
});

it('warnings render without crashing', () => {
  const id = uid(10);
  shallow(
    <Notification header='Title'
                  body='Body text'
                  type="warning"
                  date={new Date()}
                  id={id}
                  key={id}
    />
  );
});

it('"more" indicators render without crashing', () => {
  const id = uid(10);
  shallow(
    <Notification header='Title'
                  type="more"
                  key={id}
    />
  );
});
