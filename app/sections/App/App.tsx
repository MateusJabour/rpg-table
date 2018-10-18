import * as React from 'react';
import {BasicInfoSection} from '../../components';

interface Props {
  socket: SocketIOClient.Socket;
}

class App extends React.Component<Props, {}> {
  public render() {
    // const {socket} = this.props;

    return (
      <div className="App">
        <BasicInfoSection />
      </div>
    );
  }
}

export default App;
