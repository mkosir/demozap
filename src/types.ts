export type DemoTabFileMeta = {
  path: string;
  filename: string;
  componentName: string;
  code: { path: string; dirname: string; filename: { base: string; ext: string } };
  style: {
    path: string | null;
    dirname: string | null;
    filename: { base: string | null; ext: string | null };
  };
};
