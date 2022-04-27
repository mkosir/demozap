import { DemoTabFileMeta } from '../../types';

import { replaceDemoTabTemplateContent } from './01-replaceDemoTabTemplateContent/replaceDemoTabTemplateContent';

export const replaceDemoTabTemplatesContent = async (demoTabFilesMeta: DemoTabFileMeta[]): Promise<number> => {
  let numOfReplacedDemoTabTemplatesContent = 0;

  await Promise.all(
    demoTabFilesMeta.map(async (DemoTabFileMeta) => {
      await replaceDemoTabTemplateContent(DemoTabFileMeta);
      numOfReplacedDemoTabTemplatesContent++;
    }),
  );

  return numOfReplacedDemoTabTemplatesContent;
};
