import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'core/store';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch'; // or any other pipeline

import App from 'components/App';

ReactDOM.render(
  <Provider store={store}>
    <DndProvider options={HTML5toTouch}>
      <App />
    </DndProvider>
  </Provider>,
  document.getElementById('root'),
);
