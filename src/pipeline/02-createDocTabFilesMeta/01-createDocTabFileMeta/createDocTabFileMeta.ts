import { extractDocTabFilePathInfo } from '../02-extractDocTabFilePathInfo/extractDocTabFilePathInfo';
import { findAssociateDocTabFilesByName } from '../03-findAssociateDocTabFilesByName/findAssociateDocTabFilesByName';

import { DocTabFileMeta } from '../../../types';

export const createDocTabFileMeta = (
  docTabCodeFilePath: string,
  docTabStyleFilePaths: string[],
  prefix: string,
): DocTabFileMeta => {
  const docTabCodeFilePathInfo = extractDocTabFilePathInfo(docTabCodeFilePath);

  const docTabComponentFilename = `${prefix}${docTabCodeFilePathInfo.filename.base}.${docTabCodeFilePathInfo.filename.ext}`;
  const docTabComponentName = `${prefix}${docTabCodeFilePathInfo.filename.base}`;
  const docTabComponentDestinationPath = `${docTabCodeFilePathInfo.dirname}/${docTabComponentFilename}`;

  const docTabFileMeta: DocTabFileMeta = {
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
    docTabFileMeta.code.filename.base,
  );
  if (associateDocTabStyleFilePaths) {
    // per one code file only one style file is possible
    const docTabStyleFilePathInfo = extractDocTabFilePathInfo(associateDocTabStyleFilePaths[0]);
    docTabFileMeta.style.path = associateDocTabStyleFilePaths[0];
    docTabFileMeta.style.dirname = docTabStyleFilePathInfo.dirname;
    docTabFileMeta.style.filename.base = docTabStyleFilePathInfo.filename.base;
    docTabFileMeta.style.filename.ext = docTabStyleFilePathInfo.filename.ext;
  }

  return docTabFileMeta;
};
