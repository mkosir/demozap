const glob = require('glob');

const supportedCodeExt = ['jsx', 'tsx'];
const supportedStyleExt = ['css', 'scss'];

type GetDemoZapFilePaths = () => {
  demoZapCodeFilePaths: string[];
  demoZapStyleFilePaths: string[];
};

export const getDemoZapFilePaths: GetDemoZapFilePaths = () => {
  const demoTabFilePaths = glob.sync(process.cwd() + '/**/*.demozap.*', {});

  // eslint-disable-next-line
  const demoZapCodeFilePaths = demoTabFilePaths.filter((demoTabFilePath: any) =>
    supportedCodeExt.includes(demoTabFilePath.split('.').pop()),
  );
  // eslint-disable-next-line
  const demoZapStyleFilePaths = demoTabFilePaths.filter((demoTabFilePath: any) =>
    supportedStyleExt.includes(demoTabFilePath.split('.').pop()),
  );

  return { demoZapCodeFilePaths, demoZapStyleFilePaths };
};
