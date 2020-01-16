import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './ButtonRed.doctab';

const code = `import React from 'react';

import './ButtonRed.doctab.scss';

const ButtonRed = () => <button className="btn-red">Red Button</button>;

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

const _ButtonRed = () => (
  <DocTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DocTabTemplate>
);

export default _ButtonRed;
