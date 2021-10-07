import React from 'react';
import '../../../styles/sass/_hello.scss';

function App() {
  return (
    <div className='container-app'>
      <img className='hello-img' />
      <img className='hello-img seperator-img' />
      <h1 className='hello-heading'>I'm Peter Szilvasi</h1>
      <h2 className='hello-heading hello-heading2'>Software Developer</h2>
      <img className='hello-img seperator-img rotated' />
    </div>
  );
}

export default App;