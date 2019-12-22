const fsExtra = require('fsExtra-extra');

import { replaceStoryTabTemplateContent } from './replaceStoryTabTemplateContent';
import { StoryTabFileMeta } from '../../types';

export const createStoryTabComponent = async (
  storyTabFileMeta: StoryTabFileMeta,
  storyTabTemplateComponentSourcePath: string,
) => {
  await fsExtra.copy(storyTabTemplateComponentSourcePath, storyTabFileMeta.path);
  replaceStoryTabTemplateContent(storyTabFileMeta);
};
