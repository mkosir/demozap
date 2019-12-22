const replace = require('replace-in-file');

import { StoryTabFileMeta } from '../../types';

export const replaceStoryTabTemplateContent = async (
  storyTabTemplatePath: string,
  storyTabFileMeta: StoryTabFileMeta,
) => {
  const options = {
    files: storyTabTemplatePath,
    from: 'REPLACE_COMPONENT_NAME',
    to: '<REPLACE_WORKS>',
  };

  const results = await replace(options);
  console.log('Replacement results:', results);
};
