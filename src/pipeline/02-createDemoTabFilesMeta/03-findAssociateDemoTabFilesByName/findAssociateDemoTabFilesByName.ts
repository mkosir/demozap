const path = require('path');

export const findAssociateDemoTabFilesByName = (demoTabFilePaths: string[], filename: string): string[] | null => {
  const demoTabAssociateFilePaths = demoTabFilePaths.filter((demoTabStyleFilePath) => {
    const styleFilename = path.basename(demoTabStyleFilePath);
    const styleFilenameArray = styleFilename.split('.');

    if (styleFilenameArray[0] === filename) {
      return true;
    }
  });
  return demoTabAssociateFilePaths.length > 0 ? demoTabAssociateFilePaths : null;
};
