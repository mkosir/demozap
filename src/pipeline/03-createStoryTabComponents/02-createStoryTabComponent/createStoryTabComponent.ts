const fsExtra = require('fs-extra');

import { replaceStoryTabTemplateContent } from '../03-replaceStoryTabTemplateContent/replaceStoryTabTemplateContent';
import { StoryTabFileMeta } from '../../../types';

export const createStoryTabComponent = async (
  storyTabFileMeta: StoryTabFileMeta,
  storyTabTemplateSourcePath: string,
) => {
  const storyTabTemplate = `${storyTabTemplateSourcePath}.${storyTabFileMeta.code.filename.ext}`;
  await fsExtra.copy(storyTabTemplate, storyTabFileMeta.path);
  replaceStoryTabTemplateContent(storyTabFileMeta);
};
