const fs = require('fs-extra');

import { replaceStoryTabTemplateContent } from './replaceStoryTabTemplateContent';
import { StoryTabFileMeta } from '../../types';

export const createStoryTabComponent = async (
  storyTabFileMeta: StoryTabFileMeta,
  storyTabTemplateComponentSourcePath: string,
) => {
  await fs.copy(storyTabTemplateComponentSourcePath, storyTabFileMeta.destinationPath);
  replaceStoryTabTemplateContent(storyTabFileMeta);
};
