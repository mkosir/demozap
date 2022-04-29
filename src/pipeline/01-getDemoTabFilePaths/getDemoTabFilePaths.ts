const glob = require('glob');

const supportedCodeExt = ['jsx', 'tsx'];
const supportedStyleExt = ['css', 'scss'];

export const getDemoTabFilePaths = (): {
  demoTabCodeFilePaths: string[];
  demoTabStyleFilePaths: string[];
} => {
  const demoTabFilePaths = glob.sync(process.cwd() + '/**/*.demozap.*', {});

  const demoTabCodeFilePaths = demoTabFilePaths.filter((demoTabFilePath) =>
    supportedCodeExt.includes(demoTabFilePath.split('.').pop()),
  );
  const demoTabStyleFilePaths = demoTabFilePaths.filter((demoTabFilePath) =>
    supportedStyleExt.includes(demoTabFilePath.split('.').pop()),
  );

  return { demoTabCodeFilePaths, demoTabStyleFilePaths };
};
