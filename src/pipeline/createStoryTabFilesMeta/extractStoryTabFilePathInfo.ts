const path = require('path');

export const extractStoryTabFilePathInfo = (
  storyTabCodeFilePath: string,
): { dirname: string; filename: { base: string; ext: string } } => {
  const dirname = path.dirname(storyTabCodeFilePath);
  const filename = path.basename(storyTabCodeFilePath);
  const filenameArray = filename.split('.');

  return {
    dirname,
    filename: { base: filenameArray[0], ext: filenameArray[2] },
  };
};
