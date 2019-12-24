import { extractStoryTabFilePathInfo } from './01-extractStoryTabFilePathInfo/extractStoryTabFilePathInfo';
import { findAssociateStoryTabFilesByName } from './02-findAssociateStoryTabFilesByName/findAssociateStoryTabFilesByName';
import { StoryTabFileMeta } from '../../types';

const createStoryTabFileMeta = (
  storyTabCodeFilePath: string,
  storyTabStyleFilePaths: string[],
  prefix: string,
): StoryTabFileMeta => {
  const storyTabCodeFilePathInfo = extractStoryTabFilePathInfo(storyTabCodeFilePath);

  const storyTabComponentFilename = `${prefix}${storyTabCodeFilePathInfo.filename.base}.${storyTabCodeFilePathInfo.filename.ext}`;
  const storyTabComponentName = `${prefix}${storyTabCodeFilePathInfo.filename.base}`;
  const storyTabComponentDestinationPath = `${storyTabCodeFilePathInfo.dirname}/${storyTabComponentFilename}`;

  const storyTabFileMeta: StoryTabFileMeta = {
    path: storyTabComponentDestinationPath,
    filename: storyTabComponentFilename,
    componentName: storyTabComponentName,
    code: {
      path: storyTabCodeFilePath,
      dirname: storyTabCodeFilePathInfo.dirname,
      filename: {
        base: storyTabCodeFilePathInfo.filename.base,
        ext: storyTabCodeFilePathInfo.filename.ext,
      },
    },
    style: { path: null, dirname: null, filename: { base: null, ext: null } },
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
    storyTabFileMeta.style.path = associateStoryTabStyleFilePaths[0];
    storyTabFileMeta.style.dirname = storyTabStyleFilePathInfo.dirname;
    storyTabFileMeta.style.filename.base = storyTabStyleFilePathInfo.filename.base;
    storyTabFileMeta.style.filename.ext = storyTabStyleFilePathInfo.filename.ext;
  }

  return storyTabFileMeta;
};

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
