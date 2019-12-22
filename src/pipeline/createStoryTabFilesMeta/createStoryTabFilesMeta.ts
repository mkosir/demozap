import { findAssociateStoryTabFilesByName } from './utils/findAssociateStoryTabFilesByName';
import { extractStoryTabFilePathInfo } from './utils/extractStoryTabFilePathInfo';
import { StoryTabFileMeta } from '../../types';

const createStoryTabFileMeta = (
  storyTabCodeFilePath: string,
  storyTabStyleFilePaths: string[],
): StoryTabFileMeta => {
  const storyTabCodeFilePathInfo = extractStoryTabFilePathInfo(storyTabCodeFilePath);

  const storyTabFileMeta: StoryTabFileMeta = {
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
    storyTabFileMeta.code.filename.base,
  );
  if (associateStoryTabStyleFilePaths) {
    // per one code file only one style file is possible
    const storyTabStyleFilePathInfo = extractStoryTabFilePathInfo(
      associateStoryTabStyleFilePaths[0],
    );
    storyTabFileMeta.style.dirname = storyTabStyleFilePathInfo.dirname;
    storyTabFileMeta.style.filename.base = storyTabStyleFilePathInfo.filename.base;
    storyTabFileMeta.style.filename.ext = storyTabStyleFilePathInfo.filename.ext;
  }

  return storyTabFileMeta;
};

export const createStoryTabFilesMeta = (
  storyTabCodeFilePaths: string[],
  storyTabStyleFilePaths: string[],
): StoryTabFileMeta[] => {
  const storyTabFilesInfo = storyTabCodeFilePaths.map(storyTabCodeFilePath => {
    return createStoryTabFileMeta(storyTabCodeFilePath, storyTabStyleFilePaths);
  });

  return storyTabFilesInfo;
};
