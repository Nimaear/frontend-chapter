import React from 'react';
import Test1 from 'http://localhost:3000/Test.js';

const MyComp = () => {
  return (
    <div>
      Yo
      <Test1 name="World" />
    </div>
  );
};

export default MyComp;
