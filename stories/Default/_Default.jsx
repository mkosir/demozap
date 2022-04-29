import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './Default.demotab';

const code = `import React from 'react';

const Default = () => <h3>DemoZap ⚡</h3>;

export default Default;
`;

export const _Default = () => (
  <DemoTab code={code} codeExt="jsx">
    <Demo />
  </DemoTab>
);
