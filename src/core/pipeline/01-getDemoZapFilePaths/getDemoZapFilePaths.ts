const glob = require('glob');

const supportedCodeExt = ['jsx', 'tsx'];
const supportedStyleExt = ['css', 'scss'];

type GetDemoZapFilePaths = () => {
  demoZapCodeFilePaths: ReadonlyArray<string>;
  demoZapStyleFilePaths: ReadonlyArray<string>;
};

export const getDemoZapFilePaths: GetDemoZapFilePaths = () => {
  const demoTabFilePaths = glob.sync(`${process.cwd()}/**/*.demozap.*`, {}) as ReadonlyArray<string>;

  const demoZapCodeFilePaths = demoTabFilePaths.filter((demoTabFilePath: string) => {
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
