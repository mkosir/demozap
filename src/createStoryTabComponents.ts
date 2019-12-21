const fs = require('fs-extra');

import { StoryTabFileInfo, SupportedFrameworks } from './types';

export const createStoryTabComponents = async (
  storyTabFilesInfo: [StoryTabFileInfo],
  framework: SupportedFrameworks,
): Promise<number> => {
  let numOfCreatedStoryTabComponents = 0;

  let storyTabTemplateComponentSourcePath = __dirname + '/../bin/story-tab-template-component';

  switch (framework) {
    case 'react':
      storyTabTemplateComponentSourcePath = `${storyTabTemplateComponentSourcePath}/${framework}/filename.tsx`;
      break;

    default:
      throw new Error(`Framework '${framework}' not supported`);
  }

  await Promise.all(
    storyTabFilesInfo.map(async storyTabFileInfo => {
      const storyTabComponentDestinationPath = `${storyTabFileInfo.dirname}/${storyTabFileInfo.filename.base}.${storyTabFileInfo.filename.ext}`;
      await fs.copy(storyTabTemplateComponentSourcePath, storyTabComponentDestinationPath);
      numOfCreatedStoryTabComponents++;
    }),
  );

  return numOfCreatedStoryTabComponents;
};
