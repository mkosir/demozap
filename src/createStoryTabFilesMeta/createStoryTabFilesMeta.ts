import { findAssociateStoryTabFilesByName } from './findAssociateStoryTabFilesByName';
import { extractStoryTabFilePathInfo } from './extractStoryTabFilePathInfo';
import { StoryTabFileMeta } from '../types';

const createStoryTabFileMeta = (
  storyTabCodeFilePath: string,
  storyTabStyleFilePaths: string[],
): StoryTabFileMeta => {
  const storyTabCodeFilePathInfo = extractStoryTabFilePathInfo(storyTabCodeFilePath);

  const storyTabFileInfo: StoryTabFileMeta = {
    dirname: storyTabCodeFilePathInfo.dirname,
    codeFilename: {
      base: storyTabCodeFilePathInfo.filenameBase,
      ext: storyTabCodeFilePathInfo.filenameExt,
    },
    styleFilename: { base: null, ext: null },
  };

  const associateStoryTabStyleFilePaths = findAssociateStoryTabFilesByName(
    storyTabStyleFilePaths,
    storyTabFileInfo.codeFilename.base,
  );
  if (associateStoryTabStyleFilePaths) {
    // per one code file only one style file is possible
    const storyTabStyleFilePathInfo = extractStoryTabFilePathInfo(
      associateStoryTabStyleFilePaths[0],
    );
    storyTabFileInfo.styleFilename.base = storyTabStyleFilePathInfo.filenameBase;
    storyTabFileInfo.styleFilename.ext = storyTabStyleFilePathInfo.filenameExt;
  }

  return storyTabFileInfo;
};

export const createStoryTabFilesMeta = (
  storyTabCodeFilePaths: string[],
  storyTabStyleFilePaths: string[],
): StoryTabFileMeta[] => {
  const storyTabFilesInfo = storyTabCodeFilePaths.map(storyTabCodeFilePath => {
    return createStoryTabFileMeta(storyTabCodeFilePath, storyTabStyleFilePaths);
  });

  console.log('Log: storyTabFilesInfo', storyTabFilesInfo);
  return storyTabFilesInfo;
};
