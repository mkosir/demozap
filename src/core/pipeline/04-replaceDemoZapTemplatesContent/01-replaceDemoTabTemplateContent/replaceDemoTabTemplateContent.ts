import { readFile } from 'fs-extra';
import { replaceInFile } from 'replace-in-file';

import { DemoTabFileMeta } from 'core/types';

import { escapeFileContent } from './escapeFileContent';

export const replaceDemoTabTemplateContent = async (DemoTabFileMeta: DemoTabFileMeta) => {
  const replacePropCodeExt = ` codeExt="${DemoTabFileMeta.code.filename.ext}"` as const;
  const replacePropStyle = DemoTabFileMeta.style.path ? ` style={style}` : '';
  const replacePropStyleExt = DemoTabFileMeta.style.filename.ext
    ? (` styleExt="${DemoTabFileMeta.style.filename.ext}"` as const)
    : '';

  const code = await readFile(DemoTabFileMeta.code.path, 'utf8');
  const codeEscaped = escapeFileContent(code);
  let replaceStyle = '';
  if (DemoTabFileMeta.style.path) {
    const style = await readFile(DemoTabFileMeta.style.path, 'utf8');
    replaceStyle = `const style = \`${style}\`;`;
  }

  const options = [
    {
      files: DemoTabFileMeta.path,
      from: '@FILENAME',
      to: DemoTabFileMeta.code.filename.base,
    },
    {
      files: DemoTabFileMeta.path,
      from: '@CODE',
      to: codeEscaped,
    },
    {
      files: DemoTabFileMeta.path,
      from: '@STYLE',
      to: replaceStyle,
    },
    {
      files: DemoTabFileMeta.path,
      from: /@COMPONENT_NAME/g,
      to: DemoTabFileMeta.componentName,
    },
    {
      files: DemoTabFileMeta.path,
      from: '@PROP_STYLE',
      to: replacePropStyle,
    },
    {
      files: DemoTabFileMeta.path,
      from: '@PROP_CODE_EXT',
      to: replacePropCodeExt,
    },
    {
      files: DemoTabFileMeta.path,
      from: '@PROP_STYLE_EXT',
      to: replacePropStyleExt,
    },
  ];

  for (const option of options) {
    await replaceInFile(option);
  }
};
