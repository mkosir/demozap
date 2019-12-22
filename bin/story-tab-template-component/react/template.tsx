import React from 'react';

import StoryTabTemplate from 'story-tab-template-react';
import Demo from './@FILENAME.storytab';

const code = `@CODE`;

const style = `@STYLE`;

const @COMPONENT_NAME = () => (
  <StoryTabTemplate code={code} style={style} codeExt="@CODE_EXT"@STYLE_EXT>
    <Demo />
  </StoryTabTemplate>
);

export default @COMPONENT_NAME;
