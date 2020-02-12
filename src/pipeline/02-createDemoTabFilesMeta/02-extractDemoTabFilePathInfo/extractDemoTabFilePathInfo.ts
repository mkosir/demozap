const path = require('path');

export const extractDocTabFilePathInfo = (
  docTabCodeFilePath: string,
): { dirname: string; filename: { base: string; ext: string } } => {
  const dirname = path.dirname(docTabCodeFilePath);
  const filename = path.basename(docTabCodeFilePath);
  const filenameArray = filename.split('.');

  return {
    dirname,
    filename: { base: filenameArray[0], ext: filenameArray[2] },
  };
};
