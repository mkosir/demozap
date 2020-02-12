import { replaceDocTabTemplateContent } from './01-replaceDocTabTemplateContent/replaceDocTabTemplateContent';
import { DemoTabFileMeta } from '../../types';

export const replaceDocTabTemplatesContent = async (
  docTabFilesMeta: DemoTabFileMeta[],
): Promise<number> => {
  let numOfReplacedDocTabTemplatesContent = 0;

  await Promise.all(
    docTabFilesMeta.map(async DemoTabFileMeta => {
      await replaceDocTabTemplateContent(DemoTabFileMeta);
      numOfReplacedDocTabTemplatesContent++;
    }),
  );

  return numOfReplacedDocTabTemplatesContent;
};
