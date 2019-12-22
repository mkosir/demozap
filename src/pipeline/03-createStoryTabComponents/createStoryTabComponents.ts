import { createStoryTabComponent } from './createStoryTabComponent';
import { StoryTabFileMeta, SupportedFrameworks } from '../../types';

export const createStoryTabComponents = async (
  storyTabFilesMeta: StoryTabFileMeta[],
  framework: SupportedFrameworks,
): Promise<number> => {
  let numOfCreatedStoryTabComponents = 0;

  let storyTabTemplateComponentSourcePath =
    __dirname + '/../../../bin/story-tab-template-component';

  switch (framework) {
    case 'react':
      storyTabTemplateComponentSourcePath = `${storyTabTemplateComponentSourcePath}/${framework}/template.tsx`;
      break;

    default:
      throw new Error(`Framework '${framework}' not supported`);
  }

  await Promise.all(
    storyTabFilesMeta.map(async storyTabFileMeta => {
      await createStoryTabComponent(storyTabFileMeta, storyTabTemplateComponentSourcePath);
      numOfCreatedStoryTabComponents++;
    }),
  );

  return numOfCreatedStoryTabComponents;
};
