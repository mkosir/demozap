const fsExtra = require('fs-extra');
const replace = require('replace-in-file');

import { escapeFileContent } from './escapeFileContent';
import { DocTabFileMeta } from '../../../types';

export const replaceDocTabTemplateContentReact = async (docTabFileMeta: DocTabFileMeta) => {
  const replacePropStyle = docTabFileMeta.style.path ? ` style={style}` : '';
  const replacePropCodeExt = ` codeExt="${docTabFileMeta.code.filename.ext}"`;
  const replacePropStyleExt = docTabFileMeta.style.filename.ext
    ? ` styleExt="${docTabFileMeta.style.filename.ext}"`
    : '';

  const code = await fsExtra.readFile(docTabFileMeta.code.path, 'utf8');
  const codeEscaped = escapeFileContent(code);
  let replaceStyle = '';
  if (docTabFileMeta.style.path) {
    const style = await fsExtra.readFile(docTabFileMeta.style.path, 'utf8');
    replaceStyle = `const style = \`${style}\`;`;
  }

  const options = [
    {
      files: docTabFileMeta.path,
      from: '@FILENAME',
      to: docTabFileMeta.code.filename.base,
    },
    {
      files: docTabFileMeta.path,
      from: '@CODE',
      to: codeEscaped,
    },
    {
      files: docTabFileMeta.path,
      from: '@STYLE',
      to: replaceStyle,
    },
    {
      files: docTabFileMeta.path,
      from: /@COMPONENT_NAME/g,
      to: docTabFileMeta.componentName,
    },
    {
      files: docTabFileMeta.path,
      from: '@PROP_STYLE',
      to: replacePropStyle,
    },
    {
      files: docTabFileMeta.path,
      from: '@PROP_CODE_EXT',
      to: replacePropCodeExt,
    },
    {
      files: docTabFileMeta.path,
      from: '@PROP_STYLE_EXT',
      to: replacePropStyleExt,
    },
  ];
  for (const option of options) {
    await replace(option);
  }
};
