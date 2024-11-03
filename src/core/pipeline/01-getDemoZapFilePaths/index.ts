import { globSync } from 'glob';

import { GetDemoZapFilePaths } from './types';

const SUPPORTED_CODE_EXT = ['jsx', 'tsx'] as const;
const SUPPORTED_STYLE_EXT = ['css', 'scss'] as const;

export const getDemoZapFilePaths: GetDemoZapFilePaths = () => {
  const demoTabFilePaths = globSync(`${process.cwd()}/**/*.demozap.*`, {});

  const demoZapCodeFilePaths = demoTabFilePaths.filter((demoTabFilePath) => {
    const fileExt = getFileExtension(demoTabFilePath);

    if (fileExt === undefined) {
      return false;
    }

    return SUPPORTED_CODE_EXT.includes(fileExt);
  });

  const demoZapStyleFilePaths = demoTabFilePaths.filter((demoTabFilePath) => {
    const styleExt = getFileExtension(demoTabFilePath);

    if (styleExt === undefined) {
      return false;
    }

    return SUPPORTED_STYLE_EXT.includes(styleExt);
  });

  return { demoZapCodeFilePaths, demoZapStyleFilePaths };
};

const getFileExtension = (filePath: string): string | undefined => filePath.split('.').pop();
