import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './sections';

import * as socketIoClient from 'socket.io-client';

const socket = socketIoClient('http://localhost:8000');

ReactDOM.render(<App socket={socket} />, document.getElementById(
  'root',
) as HTMLElement);
