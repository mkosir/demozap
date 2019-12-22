import React from 'react';

import StoryTabTemplate from 'story-tab-template-react';
import Demo from './@FILENAME.storytab';

const code = `@CODE`;

@STYLE

const @COMPONENT_NAME = () => (
  <StoryTabTemplate code={code}@PROP_STYLE@PROP_CODE_EXT@PROP_STYLE_EXT>
    <Demo />
  </StoryTabTemplate>
);

export default @COMPONENT_NAME;
