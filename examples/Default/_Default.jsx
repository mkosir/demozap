import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './Default.doctab';

const code = `import React from 'react';

const Default = () => <div>DocTab 📑 - Default Example</div>;

export default Default;
`;

const _Default = () => (
  <DocTabTemplate code={code} codeExt="jsx">
    <Demo />
  </DocTabTemplate>
);

export default _Default;
