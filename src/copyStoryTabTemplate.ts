const fs = require('fs-extra');

type SupportedFrameworks = 'react';

export const copyStoryTabTemplate = async (framework: SupportedFrameworks) => {
  const CURR_DIR = process.cwd();
  let storyTabTemplateSourcePath: string | null = null;
  const storyTabTemplateDestinationPath = `${CURR_DIR}/stories/StoryTab`;

  switch (framework) {
    case 'react':
      storyTabTemplateSourcePath = `${CURR_DIR}/src/StoryTabTemplate/${framework}`;
      break;

    default:
      throw new Error(`Framework '${framework}' not supported`);
  }

  await fs.copy(storyTabTemplateSourcePath, storyTabTemplateDestinationPath);
};
