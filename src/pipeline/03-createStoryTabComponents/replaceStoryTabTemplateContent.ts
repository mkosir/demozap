const fsExtra = require('fs-extra');
const replace = require('replace-in-file');

import { StoryTabFileMeta } from '../../types';

export const replaceStoryTabTemplateContent = async (storyTabFileMeta: StoryTabFileMeta) => {
  const replacePropStyle = storyTabFileMeta.style.path ? ` style={style}` : '';
  const replacePropCodeExt = ` codeExt="${storyTabFileMeta.code.filename.ext}"`;
  const replacePropStyleExt = storyTabFileMeta.style.filename.ext
    ? ` styleExt="${storyTabFileMeta.style.filename.ext}"`
    : '';

  const code = await fsExtra.readFile(storyTabFileMeta.code.path);
  let replaceStyle = '';
  if (storyTabFileMeta.style.path) {
    const style = await fsExtra.readFile(storyTabFileMeta.style.path);
    replaceStyle = `const style = \`${style}\`;`;
  }

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
      to: replaceStyle,
    },
    {
      files: storyTabFileMeta.path,
      from: /@COMPONENT_NAME/g,
      to: storyTabFileMeta.componentName,
    },
    {
      files: storyTabFileMeta.path,
      from: '@PROP_STYLE',
      to: replacePropStyle,
    },
    {
      files: storyTabFileMeta.path,
      from: '@PROP_CODE_EXT',
      to: replacePropCodeExt,
    },
    {
      files: storyTabFileMeta.path,
      from: '@PROP_STYLE_EXT',
      to: replacePropStyleExt,
    },
  ];
  for (const option of options) {
    await replace(option);
  }
};
