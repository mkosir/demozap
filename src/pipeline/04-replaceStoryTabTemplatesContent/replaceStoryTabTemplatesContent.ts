import { getFrameworkFncToReplaceContent } from './01-getFrameworkFncToReplaceContent/getFrameworkFncToReplaceContent';
import { StoryTabFileMeta, SupportedFrameworks } from '../../types';

export const replaceStoryTabTemplatesContent = async (
  storyTabFilesMeta: StoryTabFileMeta[],
  framework: SupportedFrameworks,
): Promise<number> => {
  let numOfReplacedStoryTabTemplatesContent = 0;

  const replaceStoryTabTemplateContentFnc = getFrameworkFncToReplaceContent(framework);

  await Promise.all(
    storyTabFilesMeta.map(async storyTabFileMeta => {
      await replaceStoryTabTemplateContentFnc(storyTabFileMeta);
      numOfReplacedStoryTabTemplatesContent++;
    }),
  );

  return numOfReplacedStoryTabTemplatesContent;
};
