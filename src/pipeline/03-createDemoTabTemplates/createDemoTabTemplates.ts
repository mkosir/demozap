const fsExtra = require('fs-extra');
import { DemoTabFileMeta } from '../../types';

export const createDemoTabTemplates = async (
  docTabFilesMeta: DemoTabFileMeta[],
): Promise<number> => {
  let numOfCreatedDemoTabTemplates = 0;

  const docTabTemplatePath = __dirname + '/../../../bin/react-doc-tab-template-component/template';

  await Promise.all(
    docTabFilesMeta.map(async DemoTabFileMeta => {
      const docTabTemplate = `${docTabTemplatePath}.${DemoTabFileMeta.code.filename.ext}`;
      await fsExtra.copy(docTabTemplate, DemoTabFileMeta.path);
      numOfCreatedDemoTabTemplates++;
    }),
  );

  return numOfCreatedDemoTabTemplates;
};
