import { replaceDocTabTemplateContentReact } from '../02-replaceDocTabTemplateContentFramework/replaceDocTabTemplateContentReact';
import { DocTabFileMeta } from '../../../types';

type ReplaceDocTabTemplateContentFnc = (docTabFileMeta: DocTabFileMeta) => Promise<void>;

export const getFrameworkFncToReplaceContent = (
  framework: SupportedFrameworks,
): ReplaceDocTabTemplateContentFnc => {
  switch (framework) {
    case 'react':
      return replaceDocTabTemplateContentReact;

    default:
      throw new Error(`Framework '${framework}' not supported`);
  }
};
