const replace = require('replace-in-file');

import { StoryTabFileMeta } from '../../types';

export const replaceStoryTabTemplateContent = async (storyTabFileMeta: StoryTabFileMeta) => {
  const options = [
    {
      files: storyTabFileMeta.destinationPath,
      from: '@FILENAME',
      to: storyTabFileMeta.code.filename.base,
    },
    {
      files: storyTabFileMeta.destinationPath,
      from: '@CODE',
      to: '<@WORKS_1>',
    },
    {
      files: storyTabFileMeta.destinationPath,
      from: '@STYLE',
      to: '<@WORKS_2>',
    },
    {
      files: storyTabFileMeta.destinationPath,
      from: /@COMPONENT_NAME/g,
      to: storyTabFileMeta.componentName,
    },
    {
      files: storyTabFileMeta.destinationPath,
      from: '@CODE_EXT',
      to: '<@WORKS_4>',
    },
    {
      files: storyTabFileMeta.destinationPath,
      from: '@STYLE_EXT',
      to: '<@WORKS_5>',
    },
  ];

  for (const option of options) {
    await replace(option);
  }
};
