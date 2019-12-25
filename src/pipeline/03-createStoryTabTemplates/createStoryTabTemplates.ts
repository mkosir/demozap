import { getFrameworkTemplatePath } from './01-getFrameworkTemplate/getFrameworkTemplate';
import { createStoryTabTemplate } from './02-createStoryTabTemplate/createStoryTabTemplate';
import { StoryTabFileMeta, SupportedFrameworks } from '../../types';

export const createStoryTabTemplates = async (
  storyTabFilesMeta: StoryTabFileMeta[],
  framework: SupportedFrameworks,
): Promise<number> => {
  let numOfCreatedStoryTabTemplates = 0;

  const storyTabTemplateSourcePath = getFrameworkTemplatePath(framework);

  await Promise.all(
    storyTabFilesMeta.map(async storyTabFileMeta => {
      await createStoryTabTemplate(storyTabFileMeta, storyTabTemplateSourcePath);
      numOfCreatedStoryTabTemplates++;
    }),
  );

  return numOfCreatedStoryTabTemplates;
};
