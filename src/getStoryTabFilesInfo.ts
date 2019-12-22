const glob = require('glob');
const path = require('path');

import { StoryTabFileInfo } from './types';

const supportedReactCodeExt = ['jsx', 'tsx'];
const supportedCodeExt = supportedReactCodeExt;
const supportedStyleExt = ['css', 'scss'];

export const getStoryTabFilesInfo = (): {
  storyTabFilesInfo: [StoryTabFileInfo];
  numOfStoryTabFiles: number;
} => {
  const storyTabFilePaths = glob.sync(process.cwd() + '/**/*.storytab.*', {});

  const storyTabCodeFilePaths = storyTabFilePaths.filter(storyTabFilePath =>
    supportedCodeExt.includes(storyTabFilePath.split('.').pop()),
  );
  const storyTabStyleFilePaths = storyTabFilePaths.filter(storyTabFilePath =>
    supportedStyleExt.includes(storyTabFilePath.split('.').pop()),
  );

  const storyTabFilesInfo: [StoryTabFileInfo] = storyTabCodeFilePaths.map(storyTabCodeFilePath => {
    const dirname = path.dirname(storyTabCodeFilePath);
    const codeFilename = path.basename(storyTabCodeFilePath);
    const codeFilenameArray = codeFilename.split('.');

    const storyTabFileInfo: StoryTabFileInfo = {
      dirname,
      codeFilename: { base: codeFilenameArray[0], ext: codeFilenameArray[2] },
      styleFilename: { base: null, ext: null },
    };

    storyTabStyleFilePaths.map(storyTabStyleFilePath => {
      const styleFilename = path.basename(storyTabStyleFilePath);
      const styleFilenameArray = styleFilename.split('.');

      if (styleFilenameArray[0] === storyTabFileInfo.codeFilename.base) {
        storyTabFileInfo.styleFilename.base = styleFilenameArray[0];
        storyTabFileInfo.styleFilename.ext = styleFilenameArray[2];
      }
    });
    return storyTabFileInfo;
  });

  console.log('Log: storyTabFilesInfo', storyTabFilesInfo);
  return { storyTabFilesInfo, numOfStoryTabFiles: storyTabFilePaths.length };
};
