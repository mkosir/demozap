import path from 'path';

type ExtractDemoZapFilePathInfoParams = {
  demoZapCodeFilePath: string;
};

type ExtractDemoZapFilePathInfoReturn = {
  dirname: string;
  filename: Readonly<{ base: string; ext: string }>;
};

export const extractDemoZapFilePathInfo = ({
  demoZapCodeFilePath,
}: ExtractDemoZapFilePathInfoParams): ExtractDemoZapFilePathInfoReturn => {
  const dirname = path.dirname(demoZapCodeFilePath);
  const filename = path.basename(demoZapCodeFilePath);
  const filenameArray = filename.split('.');

  return {
    dirname,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    filename: { base: filenameArray[0]!, ext: filenameArray[2]! },
  };
};
