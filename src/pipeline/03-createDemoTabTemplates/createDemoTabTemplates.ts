import { DemoTabFileMeta } from 'types';

const fsExtra = require('fs-extra');

export const createDemoTabTemplates = async (demoTabFilesMeta: DemoTabFileMeta[]): Promise<number> => {
  let numOfCreatedDemoTabTemplates = 0;

  const demoTabTemplatePath = __dirname + '/../../../bin/templates/react-demo-tab/template';

  await Promise.all(
    demoTabFilesMeta.map(async (DemoTabFileMeta) => {
      const demoTabTemplate = `${demoTabTemplatePath}.${DemoTabFileMeta.code.filename.ext}`;
      await fsExtra.copy(demoTabTemplate, DemoTabFileMeta.path);
      numOfCreatedDemoTabTemplates++;
    }),
  );

  return numOfCreatedDemoTabTemplates;
};
