const glob = require('glob');

export const findStoryTabFiles = () => {
  const files = glob.sync(process.cwd() + '/**/*.storytab.*', {});
  return files;
};
