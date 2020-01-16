import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './ButtonGreen.doctab';

const code = `import React from 'react';

import './ButtonGreen.doctab.css';

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

const _ButtonGreen = () => (
  <DocTabTemplate code={code} style={style} codeExt="jsx" styleExt="css">
    <Demo />
  </DocTabTemplate>
);

export default _ButtonGreen;
