import React from 'react';

import StoryTabTemplate from 'story-tab-react';
import Demo from './Default.doctab';

const code = `import React from 'react';

const Default = () => <div>StoryTab 📑 - Default Example</div>;

export default Default;
`;

const _Default = () => (
  <StoryTabTemplate code={code} codeExt="jsx">
    <Demo />
  </StoryTabTemplate>
);

export default _Default;
