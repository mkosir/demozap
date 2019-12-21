const glob = require('glob');

export const findStoryTabFilePaths = (): Array<string> => {
  const findStoryTabFilePaths = glob.sync(process.cwd() + '/**/*.storytab.*', {});
  return findStoryTabFilePaths;
};
