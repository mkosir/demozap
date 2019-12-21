const glob = require('glob');
const path = require('path');

import { StoryTabFileInfo } from './types';

export const getStoryTabFileInfo = (): [StoryTabFileInfo] => {
  const findStoryTabFilePaths = glob.sync(process.cwd() + '/**/*.storytab.*', {});
  const storyTabFilesInfo: [StoryTabFileInfo] = findStoryTabFilePaths.map(storyTabFilePath => {
    const dirname = path.dirname(storyTabFilePath);
    const filename = path.basename(storyTabFilePath);
    return {
      dirname,
      filename,
    };
  });
  return storyTabFilesInfo;
};
