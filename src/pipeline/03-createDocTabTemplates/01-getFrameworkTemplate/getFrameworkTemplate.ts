export const getFrameworkTemplatePath = (framework: SupportedFrameworks): string => {
  let docTabTemplateSourcePath = __dirname + '/../../../../bin/story-tab-template-component';

  switch (framework) {
    case 'react':
      docTabTemplateSourcePath = `${docTabTemplateSourcePath}/${framework}/template`;
      break;

    default:
      throw new Error(`Framework '${framework}' not supported`);
  }
  return docTabTemplateSourcePath;
};
