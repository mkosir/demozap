const fsExtra = require('fs-extra');

import { DocTabFileMeta } from '../../../types';

export const createDocTabTemplate = async (
  docTabFileMeta: DocTabFileMeta,
  docTabTemplateSourcePath: string,
) => {
  const docTabTemplate = `${docTabTemplateSourcePath}.${docTabFileMeta.code.filename.ext}`;
  await fsExtra.copy(docTabTemplate, docTabFileMeta.path);
};
