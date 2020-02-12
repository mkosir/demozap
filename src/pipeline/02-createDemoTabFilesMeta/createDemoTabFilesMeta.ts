import { createDemoTabFileMeta } from './01-createDemoTabFileMeta/createDemoTabFileMeta';

import { DemoTabFileMeta } from '../../types';

export const createDemoTabFilesMeta = (
  demoTabCodeFilePaths: string[],
  demoTabStyleFilePaths: string[],
  prefix: string,
): DemoTabFileMeta[] => {
  const demoTabFilesInfo = demoTabCodeFilePaths.map(demoTabCodeFilePath => {
    return createDemoTabFileMeta(demoTabCodeFilePath, demoTabStyleFilePaths, prefix);
  });

  return demoTabFilesInfo;
};
