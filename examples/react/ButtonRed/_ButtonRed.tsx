import React from 'react';

import StoryTabTemplate from 'story-tab-template-react';
import Demo from './ButtonRed.storytab';

const code = `import React from 'react';

import './ButtonRed.storytab.scss';

const ButtonRed = () => <button className="btn-red">Red Button</button>;

export default ButtonRed;
`;

const style = `.btn-red {
  background-color: red;
  font-size: 16px;
  padding: 15px 32px;
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
  <StoryTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </StoryTabTemplate>
);

export default _ButtonRed;
