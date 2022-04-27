import { DemoTabFileMeta } from '../../types';

import { createDemoTabFileMeta } from './01-createDemoTabFileMeta/createDemoTabFileMeta';

export const createDemoTabFilesMeta = (
  demoTabCodeFilePaths: string[],
  demoTabStyleFilePaths: string[],
  prefix: string,
): DemoTabFileMeta[] => {
  const demoTabFilesInfo = demoTabCodeFilePaths.map((demoTabCodeFilePath) => {
    return createDemoTabFileMeta(demoTabCodeFilePath, demoTabStyleFilePaths, prefix);
  });

  return demoTabFilesInfo;
};
