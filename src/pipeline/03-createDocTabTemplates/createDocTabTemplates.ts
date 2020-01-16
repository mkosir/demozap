import { getFrameworkTemplatePath } from './01-getFrameworkTemplate/getFrameworkTemplate';
import { createDocTabTemplate } from './02-createDocTabTemplate/createDocTabTemplate';
import { DocTabFileMeta } from '../../types';

export const createDocTabTemplates = async (
  docTabFilesMeta: DocTabFileMeta[],
  framework: SupportedFrameworks,
): Promise<number> => {
  let numOfCreatedDocTabTemplates = 0;

  const docTabTemplateSourcePath = getFrameworkTemplatePath(framework);

  await Promise.all(
    docTabFilesMeta.map(async docTabFileMeta => {
      await createDocTabTemplate(docTabFileMeta, docTabTemplateSourcePath);
      numOfCreatedDocTabTemplates++;
    }),
  );

  return numOfCreatedDocTabTemplates;
};
