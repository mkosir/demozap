import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './@FILENAME.demozap';

const code = `@CODE`;

@STYLE

export const @COMPONENT_NAME = () => (
  <DemoTab code={code}@PROP_STYLE@PROP_CODE_EXT@PROP_STYLE_EXT>
    <Demo />
  </DemoTab>
);
