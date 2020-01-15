import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './@FILENAME.doctab';

const code = `@CODE`;

@STYLE

const @COMPONENT_NAME = () => (
  <DocTabTemplate code={code}@PROP_STYLE@PROP_CODE_EXT@PROP_STYLE_EXT>
    <Demo />
  </DocTabTemplate>
);

export default @COMPONENT_NAME;
