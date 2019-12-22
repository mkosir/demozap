import { createStoryTabComponent } from './createStoryTabComponent';
import { StoryTabFileMeta, SupportedFrameworks } from '../../types';

export const createStoryTabComponents = async (
  storyTabFilesMeta: StoryTabFileMeta[],
  framework: SupportedFrameworks,
): Promise<number> => {
  let numOfCreatedStoryTabComponents = 0;

  let storyTabTemplateSourcePath = __dirname + '/../../../bin/story-tab-template-component';

  switch (framework) {
    case 'react':
      storyTabTemplateSourcePath = `${storyTabTemplateSourcePath}/${framework}/template`;
      break;

    default:
      throw new Error(`Framework '${framework}' not supported`);
  }

  await Promise.all(
    storyTabFilesMeta.map(async storyTabFileMeta => {
      const storyTabTemplate = `${storyTabTemplateSourcePath}.${storyTabFileMeta.code.filename.ext}`;
      await createStoryTabComponent(storyTabFileMeta, storyTabTemplate);
      numOfCreatedStoryTabComponents++;
    }),
  );

  return numOfCreatedStoryTabComponents;
};
