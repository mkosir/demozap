const path = require('path');

export const findAssociateDemoTabFilesByName = (
  docTabFilePaths: string[],
  filename: string,
): string[] | null => {
  const docTabAssociateFilePaths = docTabFilePaths.filter(docTabStyleFilePath => {
    const styleFilename = path.basename(docTabStyleFilePath);
    const styleFilenameArray = styleFilename.split('.');

    if (styleFilenameArray[0] === filename) {
      return true;
    }
  });
  return docTabAssociateFilePaths.length > 0 ? docTabAssociateFilePaths : null;
};
