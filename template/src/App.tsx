import React from 'react';
import { View, App } from '@wonder-ui/core';
import { Provider } from 'mobx-react';
import Store from './store';
import routes from './routes';

const store = Store.create({});

function MyApp() {
  return (
    <Provider store={store}>
      <App routes={routes}>
        <View />
      </App>
    </Provider>
  );
}

export default MyApp;
