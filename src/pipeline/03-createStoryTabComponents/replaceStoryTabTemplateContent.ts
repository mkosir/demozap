const fsExtra = require('fs-extra');
const replace = require('replace-in-file');

import { StoryTabFileMeta } from '../../types';

export const replaceStoryTabTemplateContent = async (storyTabFileMeta: StoryTabFileMeta) => {
  const replacePropStyleExt = storyTabFileMeta.style.filename.ext
    ? ` styleExt="${storyTabFileMeta.style.filename.ext}"`
    : '';

  const code = await fsExtra.readFile(storyTabFileMeta.code.path);
  const style = await fsExtra.readFile(storyTabFileMeta.style.path);

  const options = [
    {
      files: storyTabFileMeta.path,
      from: '@FILENAME',
      to: storyTabFileMeta.code.filename.base,
    },
    {
      files: storyTabFileMeta.path,
      from: '@CODE',
      to: code,
    },
    {
      files: storyTabFileMeta.path,
      from: '@STYLE',
      to: style,
    },
    {
      files: storyTabFileMeta.path,
      from: /@COMPONENT_NAME/g,
      to: storyTabFileMeta.componentName,
    },
    {
      files: storyTabFileMeta.path,
      from: '@CODE_EXT',
      to: storyTabFileMeta.code.filename.ext,
    },
    {
      files: storyTabFileMeta.path,
      from: '@STYLE_EXT',
      to: replacePropStyleExt,
    },
  ];
  for (const option of options) {
    await replace(option);
  }
};
