import { getFrameworkFncToReplaceContent } from './01-getFrameworkFncToReplaceContent/getFrameworkFncToReplaceContent';
import { DocTabFileMeta } from '../../types';

export const replaceDocTabTemplatesContent = async (
  docTabFilesMeta: DocTabFileMeta[],
  framework: SupportedFrameworks,
): Promise<number> => {
  let numOfReplacedDocTabTemplatesContent = 0;

  const replaceDocTabTemplateContentFnc = getFrameworkFncToReplaceContent(framework);

  await Promise.all(
    docTabFilesMeta.map(async docTabFileMeta => {
      await replaceDocTabTemplateContentFnc(docTabFileMeta);
      numOfReplacedDocTabTemplatesContent++;
    }),
  );

  return numOfReplacedDocTabTemplatesContent;
};
