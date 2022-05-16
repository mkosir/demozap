import { DemoTabFileMeta } from 'core/types';

import { replaceDemoTabTemplateContent } from './01-replaceDemoTabTemplateContent/replaceDemoTabTemplateContent';

export const replaceDemoZapTemplatesContent = async (demoTabFilesMeta: DemoTabFileMeta[]): Promise<number> => {
  let numOfReplacedDemoTabTemplatesContent = 0;

  await Promise.all(
    demoTabFilesMeta.map(async (DemoTabFileMeta) => {
      await replaceDemoTabTemplateContent(DemoTabFileMeta);
      numOfReplacedDemoTabTemplatesContent++;
    }),
  );

  return numOfReplacedDemoTabTemplatesContent;
};
