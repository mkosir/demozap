import { createStoryTabComponent } from './02-createStoryTabComponent/createStoryTabComponent';
import { getFrameworkTemplatePath } from './01-getFrameworkTemplate/getFrameworkTemplate';
import { StoryTabFileMeta, SupportedFrameworks } from '../../types';

export const createStoryTabComponents = async (
  storyTabFilesMeta: StoryTabFileMeta[],
  framework: SupportedFrameworks,
): Promise<number> => {
  let numOfCreatedStoryTabComponents = 0;

  const storyTabTemplateSourcePath = getFrameworkTemplatePath(framework);

  await Promise.all(
    storyTabFilesMeta.map(async storyTabFileMeta => {
      await createStoryTabComponent(storyTabFileMeta, storyTabTemplateSourcePath);
      numOfCreatedStoryTabComponents++;
    }),
  );

  return numOfCreatedStoryTabComponents;
};
