import { replaceStoryTabTemplateContentReact } from '../02-replaceStoryTabTemplateContentFramework/replaceStoryTabTemplateContentReact';
import { SupportedFrameworks, StoryTabFileMeta } from '../../../types';

type ReplaceStoryTabTemplateContentFnc = (storyTabFileMeta: StoryTabFileMeta) => Promise<void>;

export const getFrameworkFncToReplaceContent = (
  framework: SupportedFrameworks,
): ReplaceStoryTabTemplateContentFnc => {
  switch (framework) {
    case 'react':
      return replaceStoryTabTemplateContentReact;

    default:
      throw new Error(`Framework '${framework}' not supported`);
  }
};
