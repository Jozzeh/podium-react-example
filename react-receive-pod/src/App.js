import React, {useState} from 'react';
import styles from './App.module.css';

import { MessageBus } from '@podium/browser';

function App() {
  const messageBus = new MessageBus();
  const [messager, setMessage] = useState('...');

  messageBus.subscribe('internalchannel', 'newMessage', event => {
    if(event.payload.message !== messager){
      setMessage(event.payload.message);
    }
  });

  return (
    <div className={styles.receiveApp}>
      Micro Frontend Receiver<br/>
      Hello <span className={styles.receiveMessage}>{messager}</span>
    </div>
  );
}

export default App;
