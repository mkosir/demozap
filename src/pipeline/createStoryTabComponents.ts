const fs = require('fs-extra');

import { StoryTabFileMeta, SupportedFrameworks } from '../types';

export const createStoryTabComponents = async (
  storyTabFilesInfo: StoryTabFileMeta[],
  framework: SupportedFrameworks,
  prefix: string,
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
      const storyTabComponentFilename = `${prefix}${storyTabFileInfo.code.filename.base}.${storyTabFileInfo.code.filename.ext}`;
      const storyTabComponentDestinationPath = `${storyTabFileInfo.code.dirname}/${storyTabComponentFilename}`;
      await fs.copy(storyTabTemplateComponentSourcePath, storyTabComponentDestinationPath);
      numOfCreatedStoryTabComponents++;
    }),
  );

  return numOfCreatedStoryTabComponents;
};
