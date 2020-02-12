import { replaceDemoTabTemplateContent } from './01-replaceDemoTabTemplateContent/replaceDemoTabTemplateContent';
import { DemoTabFileMeta } from '../../types';

export const replaceDemoTabTemplatesContent = async (
  docTabFilesMeta: DemoTabFileMeta[],
): Promise<number> => {
  let numOfReplacedDemoTabTemplatesContent = 0;

  await Promise.all(
    docTabFilesMeta.map(async DemoTabFileMeta => {
      await replaceDemoTabTemplateContent(DemoTabFileMeta);
      numOfReplacedDemoTabTemplatesContent++;
    }),
  );

  return numOfReplacedDemoTabTemplatesContent;
};
