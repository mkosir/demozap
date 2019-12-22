const path = require('path');

export const findAssociateStoryTabFilesByName = (
  storyTabFilePaths: string[],
  filename: string,
): string[] | null => {
  const storyTabAssociateFilePaths = storyTabFilePaths.filter(storyTabStyleFilePath => {
    const styleFilename = path.basename(storyTabStyleFilePath);
    const styleFilenameArray = styleFilename.split('.');

    if (styleFilenameArray[0] === filename) {
      return true;
    }
  });
  return storyTabAssociateFilePaths.length > 0 ? storyTabAssociateFilePaths : null;
};
