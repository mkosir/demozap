import React from 'react';

import StoryTabTemplate from 'story-tab-template-react';
import Demo from './ButtonGreen.storytab';

const code = `import React from 'react';

import './ButtonGreen.storytab.css';

const ButtonGreen = () => <button className="btn-green">Green Button</button>;

export default ButtonGreen;
`;

const style = `.btn-green {
  background-color: green;
  font-size: 16px;
  padding: 15px 32px;
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
  <StoryTabTemplate code={code} style={style} codeExt="jsx" styleExt="css">
    <Demo />
  </StoryTabTemplate>
);

export default _ButtonGreen;
