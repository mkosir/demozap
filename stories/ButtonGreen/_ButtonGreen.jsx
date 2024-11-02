import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './ButtonGreen.demozap';

const code = `import React from 'react';

import './ButtonGreen.demozap.css';

const ButtonGreen = () => <button className="btn-green">Green Button</button>;

export default ButtonGreen;
`;

const style = `.btn-green {
  background-color: green;
  font-size: 14px;
  padding: 12px 26px;
  border-radius: 6px;
  cursor: pointer;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
}

.btn-green:hover {
  background-color: #4caf50;
}
`;

export const _ButtonGreen = () => (
  <DemoTab code={code} codeExt="jsx" style={style} styleExt="css">
    <Demo />
  </DemoTab>
);
