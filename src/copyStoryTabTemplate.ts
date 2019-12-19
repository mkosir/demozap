const fs = require('fs-extra');

type SupportedFrameworks = 'react';

export const copyStoryTabTemplate = async (framework: SupportedFrameworks, typescript = false) => {
  const DESTINATION_DIR = process.cwd();
  let storyTabTemplateSourcePath = __dirname + '/../bin/StoryTabTemplate';
  const storyTabTemplateDestinationPath = `${DESTINATION_DIR}/story-tab/_Template`;

  switch (framework) {
    case 'react':
      storyTabTemplateSourcePath = `${storyTabTemplateSourcePath}/${framework}`;
      await fs.copy(storyTabTemplateSourcePath, storyTabTemplateDestinationPath);

      const removeFileExtension = typescript ? 'jsx' : 'tsx';
      await fs.remove(`${storyTabTemplateDestinationPath}/Template.${removeFileExtension}`);
      break;

    default:
      throw new Error(`Framework '${framework}' not supported`);
  }
};
