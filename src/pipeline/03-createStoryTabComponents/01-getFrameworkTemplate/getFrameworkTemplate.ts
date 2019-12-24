import { SupportedFrameworks } from '../../../types';

export const getFrameworkTemplatePath = (framework: SupportedFrameworks): string => {
  let storyTabTemplateSourcePath = __dirname + '/../../../../bin/story-tab-template-component';

  switch (framework) {
    case 'react':
      storyTabTemplateSourcePath = `${storyTabTemplateSourcePath}/${framework}/template`;
      break;

    default:
      throw new Error(`Framework '${framework}' not supported`);
  }
  return storyTabTemplateSourcePath;
};
