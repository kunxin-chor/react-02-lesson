import React from 'react';
import './styles.css'

import Menu from './Menu.js'
import {Image} from './Image.js'
import Content from './Content.js'

function App() {
  return (
    <div>
      <Menu/>
      <div>
        <h1>ACME Hardware Pte. Ltd</h1>
       <Image/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
