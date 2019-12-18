const fs = require('fs-extra');

type SupportedFrameworks = 'React';

export const copyStoryTabComponent = async (framework: SupportedFrameworks) => {
  const CURR_DIR = process.cwd();
  let storyTabComponentSourcePath: string | null = null;
  const storyTabComponentDestinationPath = `${CURR_DIR}/stories/StoryTab`;

  switch (framework) {
    case 'React':
      storyTabComponentSourcePath = `${CURR_DIR}/src/StoryTabComponent/${framework}`;
      break;

    default:
      throw new Error(`Framework '${framework}' not supported`);
  }

  await fs.copy(storyTabComponentSourcePath, storyTabComponentDestinationPath);
};
