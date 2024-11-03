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

export const SUPPORTED_FRAMEWORKS = ['react', 'vue', 'svelte'] as const;
export type SupportedFramework = (typeof SUPPORTED_FRAMEWORKS)[number];
