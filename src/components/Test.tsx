import React, { type FC, useCallback, useState } from 'react';

type Props = {
  name: string;
};

const Test: FC<Props> = ({ name }) => {
  const [count, setCount] = useState(0);
  const inc = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <h1>Hello, {name} ({count}).</h1>
      <button onClick={inc}>Increment</button>
    </div>
  );
};

export default Test;
