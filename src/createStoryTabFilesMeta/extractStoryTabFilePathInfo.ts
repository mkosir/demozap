const path = require('path');

export const extractStoryTabFilePathInfo = (
  storyTabCodeFilePath: string,
): { dirname: string; filenameBase: string; filenameExt: string } => {
  const dirname = path.dirname(storyTabCodeFilePath);
  const filename = path.basename(storyTabCodeFilePath);
  const filenameArray = filename.split('.');

  return {
    dirname,
    filenameBase: filenameArray[0],
    filenameExt: filenameArray[2],
  };
};
