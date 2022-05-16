import { DemoTabFileMeta } from 'core/types';

import { extractDemoZapFilePathInfo } from './extractDemoZapFilePathInfo';
import { findAssociateDemoZapFilesByName } from './findAssociateDemoZapFilesByName';

type CreateDemoZapFileMetaParams = {
  demoZapCodeFilePath: Readonly<string>;
  demoZapStyleFilePaths: ReadonlyArray<string>;
  prefix: Readonly<string>;
};

type CreateDemoZapFileMeta = (createDemoZapFileMetaParams: CreateDemoZapFileMetaParams) => DemoTabFileMeta;

export const createDemoZapFileMeta: CreateDemoZapFileMeta = ({
  demoZapCodeFilePath,
  demoZapStyleFilePaths,
  prefix,
}): DemoTabFileMeta => {
  const demoTabCodeFilePathInfo = extractDemoZapFilePathInfo({ demoZapCodeFilePath });

  const demoTabComponentFilename = `${prefix}${demoTabCodeFilePathInfo.filename.base}.${demoTabCodeFilePathInfo.filename.ext}`;
  const demoTabComponentName = `${prefix}${demoTabCodeFilePathInfo.filename.base}`;
  const demoTabComponentDestinationPath = `${demoTabCodeFilePathInfo.dirname}/${demoTabComponentFilename}`;

  const DemoTabFileMeta: DemoTabFileMeta = {
    path: demoTabComponentDestinationPath,
    filename: demoTabComponentFilename,
    componentName: demoTabComponentName,
    code: {
      path: demoZapCodeFilePath,
      dirname: demoTabCodeFilePathInfo.dirname,
      filename: {
        base: demoTabCodeFilePathInfo.filename.base,
        ext: demoTabCodeFilePathInfo.filename.ext,
      },
    },
    style: { path: null, dirname: null, filename: { base: null, ext: null } },
  };

  const associateDemoTabStyleFilePaths = findAssociateDemoZapFilesByName(
    demoZapStyleFilePaths,
    DemoTabFileMeta.code.filename.base,
  );
  if (associateDemoTabStyleFilePaths) {
    // per one code file only one style file is possible
    const demoTabStyleFilePathInfo = extractDemoZapFilePathInfo({
      demoZapCodeFilePath: associateDemoTabStyleFilePaths[0],
    });
    DemoTabFileMeta.style.path = associateDemoTabStyleFilePaths[0];
    DemoTabFileMeta.style.dirname = demoTabStyleFilePathInfo.dirname;
    DemoTabFileMeta.style.filename.base = demoTabStyleFilePathInfo.filename.base;
    DemoTabFileMeta.style.filename.ext = demoTabStyleFilePathInfo.filename.ext;
  }

  return DemoTabFileMeta;
};
