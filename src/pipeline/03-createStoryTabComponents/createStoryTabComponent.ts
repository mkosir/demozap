const fs = require('fs-extra');

import { replaceStoryTabTemplateContent } from './replaceStoryTabTemplateContent';
import { StoryTabFileMeta } from '../../types';

export const createStoryTabComponent = async (
  storyTabFileMeta: StoryTabFileMeta,
  storyTabTemplateComponentSourcePath: string,
  prefix: string,
) => {
  const storyTabComponentFilename = `${prefix}${storyTabFileMeta.code.filename.base}.${storyTabFileMeta.code.filename.ext}`;
  const storyTabComponentDestinationPath = `${storyTabFileMeta.code.dirname}/${storyTabComponentFilename}`;
  await fs.copy(storyTabTemplateComponentSourcePath, storyTabComponentDestinationPath);
  replaceStoryTabTemplateContent();
};
