const glob = require('glob');

const supportedCodeExt = ['jsx', 'tsx'];
const supportedStyleExt = ['css', 'scss'];

export const getDemoTabFilePaths = (): {
  demoTabCodeFilePaths: string[];
  demoTabStyleFilePaths: string[];
} => {
  const demoTabFilePaths = glob.sync(process.cwd() + '/**/*.demozap.*', {});

  // eslint-disable-next-line
  const demoTabCodeFilePaths = demoTabFilePaths.filter((demoTabFilePath: any) =>
    supportedCodeExt.includes(demoTabFilePath.split('.').pop()),
  );
  // eslint-disable-next-line
  const demoTabStyleFilePaths = demoTabFilePaths.filter((demoTabFilePath: any) =>
    supportedStyleExt.includes(demoTabFilePath.split('.').pop()),
  );

  return { demoTabCodeFilePaths, demoTabStyleFilePaths };
};
