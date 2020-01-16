import { replaceDocTabTemplateContent } from './01-replaceDocTabTemplateContent/replaceDocTabTemplateContent';
import { DocTabFileMeta } from '../../types';

export const replaceDocTabTemplatesContent = async (
  docTabFilesMeta: DocTabFileMeta[],
): Promise<number> => {
  let numOfReplacedDocTabTemplatesContent = 0;

  await Promise.all(
    docTabFilesMeta.map(async docTabFileMeta => {
      await replaceDocTabTemplateContent(docTabFileMeta);
      numOfReplacedDocTabTemplatesContent++;
    }),
  );

  return numOfReplacedDocTabTemplatesContent;
};
