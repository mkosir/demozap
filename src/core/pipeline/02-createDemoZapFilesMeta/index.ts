import { DemoTabFileMeta } from 'core/types';

import { createDemoZapFileMeta } from './createDemoZapFileMeta';

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
    return createDemoZapFileMeta(demoZapCodeFilePath, demoZapStyleFilePaths, prefix);
  });

  return demoTabFilesInfo;
};
