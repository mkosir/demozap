const glob = require('glob');

const supportedReactCodeExt = ['jsx', 'tsx'];
const supportedCodeExt = supportedReactCodeExt;
const supportedStyleExt = ['css', 'scss'];

export const getDocTabFilePaths = (): {
  docTabCodeFilePaths: string[];
  docTabStyleFilePaths: string[];
} => {
  const docTabFilePaths = glob.sync(process.cwd() + '/**/*.storytab.*', {});

  const docTabCodeFilePaths = docTabFilePaths.filter(docTabFilePath =>
    supportedCodeExt.includes(docTabFilePath.split('.').pop()),
  );
  const docTabStyleFilePaths = docTabFilePaths.filter(docTabFilePath =>
    supportedStyleExt.includes(docTabFilePath.split('.').pop()),
  );

  return { docTabCodeFilePaths, docTabStyleFilePaths };
};
