import { copy } from 'fs-extra';

import { DemoTabFileMeta } from 'core/types';

export const createDemoZapTemplates = async (demoTabFilesMeta: Array<DemoTabFileMeta>): Promise<number> => {
  let numOfCreatedDemoTabTemplates = 0;

  const demoTabTemplatePath = __dirname + '/../../../../bin/templates/react-demo-tab/template';

  await Promise.all(
    demoTabFilesMeta.map(async (DemoTabFileMeta) => {
      const demoTabTemplate = `${demoTabTemplatePath}.${DemoTabFileMeta.code.filename.ext}`;
      await copy(demoTabTemplate, DemoTabFileMeta.path);
      numOfCreatedDemoTabTemplates++;
    }),
  );

  return numOfCreatedDemoTabTemplates;
};
