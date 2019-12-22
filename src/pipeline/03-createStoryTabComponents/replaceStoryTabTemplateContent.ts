const replace = require('replace-in-file');

import { StoryTabFileMeta } from '../../types';

export const replaceStoryTabTemplateContent = async (
  storyTabTemplatePath: string,
  storyTabFileMeta: StoryTabFileMeta,
) => {
  const options = [
    {
      files: storyTabTemplatePath,
      from: '@FILENAME',
      to: '<@WORKS_0>',
    },
    {
      files: storyTabTemplatePath,
      from: '@CODE',
      to: '<@WORKS_1>',
    },
    {
      files: storyTabTemplatePath,
      from: '@STYLE',
      to: '<@WORKS_2>',
    },
    {
      files: storyTabTemplatePath,
      from: /@COMPONENT_NAME/g,
      to: '<@WORKS_3>',
    },
    {
      files: storyTabTemplatePath,
      from: '@CODE_EXT',
      to: '<@WORKS_4>',
    },
    {
      files: storyTabTemplatePath,
      from: '@STYLE_EXT',
      to: '<@WORKS_5>',
    },
  ];

  for (const option of options) {
    await replace(option);
  }
};
