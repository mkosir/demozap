const glob = require('glob');

const supportedReactCodeExt = ['jsx', 'tsx'];
const supportedCodeExt = supportedReactCodeExt;
const supportedStyleExt = ['css', 'scss'];

export const getStoryTabFilePaths = (): {
  storyTabCodeFilePaths: string[];
  storyTabStyleFilePaths: string[];
} => {
  const storyTabFilePaths = glob.sync(process.cwd() + '/**/*.storytab.*', {});

  const storyTabCodeFilePaths = storyTabFilePaths.filter(storyTabFilePath =>
    supportedCodeExt.includes(storyTabFilePath.split('.').pop()),
  );
  const storyTabStyleFilePaths = storyTabFilePaths.filter(storyTabFilePath =>
    supportedStyleExt.includes(storyTabFilePath.split('.').pop()),
  );

  return { storyTabCodeFilePaths, storyTabStyleFilePaths };
};
