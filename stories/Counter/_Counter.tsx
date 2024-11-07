import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './Counter.demozap';

const code = `import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onCountInc = () => setCount(count + 1);

  const msg = \`Button clicked \${count.toString()} \${count > 1 ? 'times' : 'time'}\`;
  const marginBottom = 10;

  return (
    <>
      <button
        style={{ fontSize: 16, padding: '5px 15px', marginBottom: \`\${marginBottom.toString()}px\` }}
        onClick={onCountInc}
      >
        Click
      </button>
      <div>{msg}</div>
    </>
  );
};

export default Counter;
`;

export const _Counter = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);
