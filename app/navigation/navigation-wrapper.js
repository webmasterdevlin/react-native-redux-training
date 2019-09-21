import React from 'react';
import RootNavigation from './root-navigation';
import {Provider} from 'react-redux';
import store from '../store';

export default function NavigationWrapper() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
