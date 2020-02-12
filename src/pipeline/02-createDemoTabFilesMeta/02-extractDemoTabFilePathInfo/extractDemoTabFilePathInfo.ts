const path = require('path');

export const extractDemoTabFilePathInfo = (
  demoTabCodeFilePath: string,
): { dirname: string; filename: { base: string; ext: string } } => {
  const dirname = path.dirname(demoTabCodeFilePath);
  const filename = path.basename(demoTabCodeFilePath);
  const filenameArray = filename.split('.');

  return {
    dirname,
    filename: { base: filenameArray[0], ext: filenameArray[2] },
  };
};
