const fsExtra = require('fs-extra');

import { StoryTabFileMeta } from '../../../types';

export const createStoryTabTemplate = async (
  storyTabFileMeta: StoryTabFileMeta,
  storyTabTemplateSourcePath: string,
) => {
  const storyTabTemplate = `${storyTabTemplateSourcePath}.${storyTabFileMeta.code.filename.ext}`;
  await fsExtra.copy(storyTabTemplate, storyTabFileMeta.path);
};
