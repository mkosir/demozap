import { createStoryTabFileMeta } from './01-createStoryTabFileMeta/createStoryTabFileMeta';

import { StoryTabFileMeta } from '../../types';

export const createStoryTabFilesMeta = (
  storyTabCodeFilePaths: string[],
  storyTabStyleFilePaths: string[],
  prefix: string,
): StoryTabFileMeta[] => {
  const storyTabFilesInfo = storyTabCodeFilePaths.map(storyTabCodeFilePath => {
    return createStoryTabFileMeta(storyTabCodeFilePath, storyTabStyleFilePaths, prefix);
  });

  return storyTabFilesInfo;
};
