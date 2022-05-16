import { DemoTabFileMeta } from 'core/types';

import { createDemoTabFileMeta } from './01-createDemoTabFileMeta/createDemoTabFileMeta';

type CreateDemoZapFilesMetaParams = {
  demoZapCodeFilePaths: ReadonlyArray<string>;
  demoZapStyleFilePaths: ReadonlyArray<string>;
  prefix: string;
};

type CreateDemoZapFilesMeta = (createDemoZapFilesMetaParams: CreateDemoZapFilesMetaParams) => DemoTabFileMeta[];

export const createDemoZapFilesMeta: CreateDemoZapFilesMeta = ({
  demoZapCodeFilePaths,
  demoZapStyleFilePaths,
  prefix,
}) => {
  const demoTabFilesInfo = demoZapCodeFilePaths.map((demoZapCodeFilePath) => {
    return createDemoTabFileMeta(demoZapCodeFilePath, demoZapStyleFilePaths, prefix);
  });

  return demoTabFilesInfo;
};
