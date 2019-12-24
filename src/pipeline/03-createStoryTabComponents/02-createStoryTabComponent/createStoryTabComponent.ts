const fsExtra = require('fs-extra');

import { replaceStoryTabTemplateContent } from '../03-replaceStoryTabTemplateContent/replaceStoryTabTemplateContent';
import { StoryTabFileMeta } from '../../../types';

export const createStoryTabComponent = async (
  storyTabFileMeta: StoryTabFileMeta,
  storyTabTemplateSourcePath: string,
) => {
  await fsExtra.copy(storyTabTemplateSourcePath, storyTabFileMeta.path);
  replaceStoryTabTemplateContent(storyTabFileMeta);
};
