import { globSync } from 'glob';

import { GetDemoZapFilePaths } from './types';

const supportedCodeExt = ['jsx', 'tsx'] as const;
const supportedStyleExt = ['css', 'scss'] as const;

export const getDemoZapFilePaths: GetDemoZapFilePaths = () => {
  const demoTabFilePaths = globSync(`${process.cwd()}/**/*.demozap.*`, {});

  const demoZapCodeFilePaths = demoTabFilePaths.filter((demoTabFilePath) => {
    const fileExt = getFileExtension(demoTabFilePath);

    if (fileExt === undefined) {
      return false;
    }

    return supportedCodeExt.includes(fileExt);
  });

  const demoZapStyleFilePaths = demoTabFilePaths.filter((demoTabFilePath) => {
    const styleExt = getFileExtension(demoTabFilePath);

    if (styleExt === undefined) {
      return false;
    }

    return supportedStyleExt.includes(styleExt);
  });

  return { demoZapCodeFilePaths, demoZapStyleFilePaths };
};

const getFileExtension = (filePath: string): string | undefined => filePath.split('.').pop();
