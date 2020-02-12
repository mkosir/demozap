import { extractDocTabFilePathInfo } from '../02-extractDemoTabFilePathInfo/extractDemoTabFilePathInfo';
import { findAssociateDocTabFilesByName } from '../03-findAssociateDemoTabFilesByName/findAssociateDemoTabFilesByName';

import { DemoTabFileMeta } from '../../../types';

export const createDemoTabFileMeta = (
  docTabCodeFilePath: string,
  docTabStyleFilePaths: string[],
  prefix: string,
): DemoTabFileMeta => {
  const docTabCodeFilePathInfo = extractDocTabFilePathInfo(docTabCodeFilePath);

  const docTabComponentFilename = `${prefix}${docTabCodeFilePathInfo.filename.base}.${docTabCodeFilePathInfo.filename.ext}`;
  const docTabComponentName = `${prefix}${docTabCodeFilePathInfo.filename.base}`;
  const docTabComponentDestinationPath = `${docTabCodeFilePathInfo.dirname}/${docTabComponentFilename}`;

  const DemoTabFileMeta: DemoTabFileMeta = {
    path: docTabComponentDestinationPath,
    filename: docTabComponentFilename,
    componentName: docTabComponentName,
    code: {
      path: docTabCodeFilePath,
      dirname: docTabCodeFilePathInfo.dirname,
      filename: {
        base: docTabCodeFilePathInfo.filename.base,
        ext: docTabCodeFilePathInfo.filename.ext,
      },
    },
    style: { path: null, dirname: null, filename: { base: null, ext: null } },
  };

  const associateDocTabStyleFilePaths = findAssociateDocTabFilesByName(
    docTabStyleFilePaths,
    DemoTabFileMeta.code.filename.base,
  );
  if (associateDocTabStyleFilePaths) {
    // per one code file only one style file is possible
    const docTabStyleFilePathInfo = extractDocTabFilePathInfo(associateDocTabStyleFilePaths[0]);
    DemoTabFileMeta.style.path = associateDocTabStyleFilePaths[0];
    DemoTabFileMeta.style.dirname = docTabStyleFilePathInfo.dirname;
    DemoTabFileMeta.style.filename.base = docTabStyleFilePathInfo.filename.base;
    DemoTabFileMeta.style.filename.ext = docTabStyleFilePathInfo.filename.ext;
  }

  return DemoTabFileMeta;
};
