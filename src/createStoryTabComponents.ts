const fs = require('fs-extra');

import { StoryTabFileInfo, SupportedFrameworks } from './types';

export const createStoryTabComponents = async (
  storyTabFilesInfo: [StoryTabFileInfo],
  framework: SupportedFrameworks,
): Promise<number> => {
  let numOfCreatedStoryTabComponents = 0;

  let storyTabTemplateComponentPath = __dirname + '/../bin/story-tab-template-component';
  const DESTINATION_DIR = process.cwd();
  // const storyTabTemplateDestinationPath = `${DESTINATION_DIR}/story-tab/_Template`;

  switch (framework) {
    case 'react':
      storyTabTemplateComponentPath = `${storyTabTemplateComponentPath}/${framework}/filename.tsx`;
      break;

    default:
      throw new Error(`Framework '${framework}' not supported`);
  }

  await Promise.all(
    storyTabFilesInfo.map(async storyTabFileInfo => {
      await fs.copy(storyTabTemplateComponentPath, storyTabFileInfo.dirname);
      numOfCreatedStoryTabComponents++;
    }),
  );

  return numOfCreatedStoryTabComponents;
};
