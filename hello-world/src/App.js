import React from 'react';
import HelloWorld from './components/HelloWorld'
import HelloWorldClass from './components/HelloWorldClass'

function App() {
  return (
    <div className="App">
      <HelloWorld name="Roger" color="blue"></HelloWorld>
      <HelloWorld></HelloWorld>
      {/* Hello World Class */}
      <HelloWorldClass name="Roger" />
      <HelloWorldClass />
    </div>
  );
}

export default App;
