import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function App() {
  return (
    <div>
      <CopyToClipboard text="Hello, React!">
        <button>Copy Text</button>
      </CopyToClipboard>
    </div>
  );
}

export default App;
