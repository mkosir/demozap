const glob = require('glob');

export const findStoryTabFiles = (): Array<string> => {
  const storyTabFiles = glob.sync(process.cwd() + '/**/*.storytab.*', {});
  return storyTabFiles;
};
