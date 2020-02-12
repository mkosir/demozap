import { createDemoTabFileMeta } from './01-createDemoTabFileMeta/createDemoTabFileMeta';

import { DemoTabFileMeta } from '../../types';

export const createDemoTabFilesMeta = (
  docTabCodeFilePaths: string[],
  docTabStyleFilePaths: string[],
  prefix: string,
): DemoTabFileMeta[] => {
  const docTabFilesInfo = docTabCodeFilePaths.map(docTabCodeFilePath => {
    return createDemoTabFileMeta(docTabCodeFilePath, docTabStyleFilePaths, prefix);
  });

  return docTabFilesInfo;
};
