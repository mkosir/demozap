import { readFile } from 'node:fs/promises';

import { replaceInFile } from 'replace-in-file';

import type { DemoTabFileMeta } from 'core/types';

import { escapeFileContent } from './escapeFileContent';

export const replaceDemoTabTemplateContent = async (demoTabFileMeta: DemoTabFileMeta) => {
  const replacePropCodeExt = ` codeExt="${demoTabFileMeta.code.filename.ext}"` as const;
  const replacePropStyle = demoTabFileMeta.style.path ? ` style={style}` : '';
  const replacePropStyleExt = demoTabFileMeta.style.filename.ext
    ? (` styleExt="${demoTabFileMeta.style.filename.ext}"` as const)
    : '';

  const code = await readFile(demoTabFileMeta.code.path, 'utf8');
  const codeEscaped = escapeFileContent(code);
  let replaceStyle = '';
  if (demoTabFileMeta.style.path) {
    const style = await readFile(demoTabFileMeta.style.path, 'utf8');
    replaceStyle = `const style = \`${style}\`;`;
  }

  const options = [
    {
      files: demoTabFileMeta.path,
      from: '@FILENAME',
      to: demoTabFileMeta.code.filename.base,
    },
    {
      files: demoTabFileMeta.path,
      from: '@CODE',
      to: codeEscaped,
    },
    {
      files: demoTabFileMeta.path,
      from: '@STYLE',
      to: replaceStyle,
    },
    {
      files: demoTabFileMeta.path,
      from: /@COMPONENT_NAME/g,
      to: demoTabFileMeta.componentName,
    },
    {
      files: demoTabFileMeta.path,
      from: '@PROP_STYLE',
      to: replacePropStyle,
    },
    {
      files: demoTabFileMeta.path,
      from: '@PROP_CODE_EXT',
      to: replacePropCodeExt,
    },
    {
      files: demoTabFileMeta.path,
      from: '@PROP_STYLE_EXT',
      to: replacePropStyleExt,
    },
  ] as const;

  for (const option of options) {
    await replaceInFile(option);
  }
};
