import path from 'path';

type ExtractDemoZapFilePathInfoParams = {
  demoZapCodeFilePath: Readonly<string>;
};

type ExtractDemoZapFilePathInfo = (extractDemoZapFilePathInfoParams: ExtractDemoZapFilePathInfoParams) => {
  dirname: Readonly<string>;
  filename: Readonly<{ base: string; ext: string }>;
};

export const extractDemoZapFilePathInfo: ExtractDemoZapFilePathInfo = ({ demoZapCodeFilePath }) => {
  const dirname = path.dirname(demoZapCodeFilePath);
  const filename = path.basename(demoZapCodeFilePath);
  const filenameArray = filename.split('.');

  return {
    dirname,
    filename: { base: filenameArray[0], ext: filenameArray[2] },
  };
};
