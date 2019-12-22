import { findAssociateStoryTabFilesByName } from './findAssociateStoryTabFilesByName';
import { extractStoryTabFilePathInfo } from './extractStoryTabFilePathInfo';
import { StoryTabFileMeta } from '../types';

const createStoryTabFileMeta = (
  storyTabCodeFilePath: string,
  storyTabStyleFilePaths: string[],
): StoryTabFileMeta => {
  const storyTabCodeFilePathInfo = extractStoryTabFilePathInfo(storyTabCodeFilePath);

  const storyTabFileInfo: StoryTabFileMeta = {
    code: {
      dirname: storyTabCodeFilePathInfo.dirname,
      filename: {
        base: storyTabCodeFilePathInfo.filename.base,
        ext: storyTabCodeFilePathInfo.filename.ext,
      },
    },
    style: { dirname: null, filename: { base: null, ext: null } },
  };

  const associateStoryTabStyleFilePaths = findAssociateStoryTabFilesByName(
    storyTabStyleFilePaths,
    storyTabFileInfo.code.filename.base,
  );
  if (associateStoryTabStyleFilePaths) {
    // per one code file only one style file is possible
    const storyTabStyleFilePathInfo = extractStoryTabFilePathInfo(
      associateStoryTabStyleFilePaths[0],
    );
    storyTabFileInfo.style.dirname = storyTabStyleFilePathInfo.dirname;
    storyTabFileInfo.style.filename.base = storyTabStyleFilePathInfo.filename.base;
    storyTabFileInfo.style.filename.ext = storyTabStyleFilePathInfo.filename.ext;
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
