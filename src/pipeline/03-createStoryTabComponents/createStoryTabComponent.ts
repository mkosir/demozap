const fsExtra = require('fs-extra');

import { replaceStoryTabTemplateContent } from './replaceStoryTabTemplateContent';
import { StoryTabFileMeta } from '../../types';

export const createStoryTabComponent = async (
  storyTabFileMeta: StoryTabFileMeta,
  storyTabTemplateSourcePath: string,
) => {
  await fsExtra.copy(storyTabTemplateSourcePath, storyTabFileMeta.path);
  replaceStoryTabTemplateContent(storyTabFileMeta);
};
