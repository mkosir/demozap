import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './ButtonRed.demozap';

const code = `import React, { FC } from 'react';

import './ButtonRed.demozap.scss';

const ButtonRed: FC = () => <button className="btn-red">Red Button</button>;

export default ButtonRed;
`;

const style = `.btn-red {
  background-color: red;
  font-size: 14px;
  padding: 12px 26px;
  border-radius: 6px;
  cursor: pointer;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;

  &:hover {
    background-color: #ca1f1f;
  }
}
`;

export const _ButtonRed = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DemoTab>
);
