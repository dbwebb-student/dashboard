import { createStore } from 'redux';
import reducer from './reducer';

export default createStore(reducer, {
  ircLog: [{
    time: '20:35',
    name: 'Magnus',
    message: 'This is a test message',
  },
],
});
