import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { copy } from 'fs-extra';

import type { DemoTabFileMeta } from 'core/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createDemoZapTemplates = async (demoTabFilesMeta: Array<DemoTabFileMeta>): Promise<number> => {
  let numOfCreatedDemoTabTemplates = 0;

  const demoTabTemplatePath = `${__dirname}/../bin/templates/react-demo-tab/template`;

  await Promise.all(
    demoTabFilesMeta.map(async (DemoTabFileMeta) => {
      const demoTabTemplate = `${demoTabTemplatePath}.${DemoTabFileMeta.code.filename.ext}`;
      await copy(demoTabTemplate, DemoTabFileMeta.path);
      numOfCreatedDemoTabTemplates++;
    }),
  );

  return numOfCreatedDemoTabTemplates;
};
