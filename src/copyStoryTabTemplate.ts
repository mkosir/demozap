const fs = require('fs-extra');

type SupportedFrameworks = 'react';

export const copyStoryTabTemplate = async (framework: SupportedFrameworks) => {
  const DESTINATION_DIR = process.cwd();
  let storyTabTemplateSourcePath = __dirname + '/StoryTabTemplate';
  const storyTabTemplateDestinationPath = `${DESTINATION_DIR}/stories/StoryTab`;

  switch (framework) {
    case 'react':
      storyTabTemplateSourcePath = `${storyTabTemplateSourcePath}/${framework}`;
      break;

    default:
      throw new Error(`Framework '${framework}' not supported`);
  }

  await fs.copy(storyTabTemplateSourcePath, storyTabTemplateDestinationPath);
};
