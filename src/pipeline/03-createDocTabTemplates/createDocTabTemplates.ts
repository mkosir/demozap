const fsExtra = require('fs-extra');
import { DocTabFileMeta } from '../../types';

export const createDocTabTemplates = async (docTabFilesMeta: DocTabFileMeta[]): Promise<number> => {
  let numOfCreatedDocTabTemplates = 0;

  const docTabTemplatePath = __dirname + '/../../../bin/react-doc-tab-template-component/template';

  await Promise.all(
    docTabFilesMeta.map(async docTabFileMeta => {
      const docTabTemplate = `${docTabTemplatePath}.${docTabFileMeta.code.filename.ext}`;
      await fsExtra.copy(docTabTemplate, docTabFileMeta.path);
      numOfCreatedDocTabTemplates++;
    }),
  );

  return numOfCreatedDocTabTemplates;
};
