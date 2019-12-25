import React from 'react';

import StoryTabTemplate from 'story-tab-template-react';
import Demo from './ButtonRed.storytab';

const code = `import React from 'react';

import './ButtonRed.storytab.scss';

const ButtonRed = () => <button className="btn-red">Red Button Component</button>;

export default ButtonRed;
`;

const style = `.btn-red {
  background-color: red;
}
`;

const _ButtonRed = () => (
  <StoryTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </StoryTabTemplate>
);

export default _ButtonRed;
