import { createDocTabFileMeta } from './01-createDocTabFileMeta/createDocTabFileMeta';

import { DocTabFileMeta } from '../../types';

export const createDocTabFilesMeta = (
  docTabCodeFilePaths: string[],
  docTabStyleFilePaths: string[],
  prefix: string,
): DocTabFileMeta[] => {
  const docTabFilesInfo = docTabCodeFilePaths.map(docTabCodeFilePath => {
    return createDocTabFileMeta(docTabCodeFilePath, docTabStyleFilePaths, prefix);
  });

  return docTabFilesInfo;
};
