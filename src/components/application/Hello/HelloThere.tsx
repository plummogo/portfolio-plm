import React from 'react';
import '../../../styles/sass/_hello.scss';

function HelloThere() {
  return (
    <div className='hello-container'>
      <img className='hello-img' />
      <img className='hello-img seperator-img' />
      <h1 className='hello-heading'>I'm Peter Szilvasi</h1>
      <h2 className='hello-heading hello-heading2'>software developer</h2>
      <img className='hello-img seperator-img rotated' />
    </div>
  );
}

export default HelloThere;