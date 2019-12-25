import React from 'react';

import StoryTabTemplate from 'story-tab-template-react';
import Demo from './ButtonGreen.storytab';

const code = `import React from 'react';

import './ButtonGreen.storytab.css';

const ButtonGreen = () => <button className="btn-green">Green Button Component</button>;

export default ButtonGreen;
`;

const style = `.btn-green {
  background-color: green;
}
`;

const _ButtonGreen = () => (
  <StoryTabTemplate code={code} style={style} codeExt="jsx" styleExt="css">
    <Demo />
  </StoryTabTemplate>
);

export default _ButtonGreen;
