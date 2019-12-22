const replace = require('replace-in-file');

import { StoryTabFileMeta } from '../../types';

export const replaceStoryTabTemplateContent = async (storyTabFileMeta: StoryTabFileMeta) => {
  const replacePropStyleExt = storyTabFileMeta.style.filename.ext
    ? ` styleExt="${storyTabFileMeta.style.filename.ext}"`
    : '';

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
      to: storyTabFileMeta.code.filename.ext,
    },
    {
      files: storyTabFileMeta.destinationPath,
      from: '@STYLE_EXT',
      to: replacePropStyleExt,
    },
  ];
  for (const option of options) {
    await replace(option);
  }
};
