export type SupportedFrameworks = 'react';

export type StoryTabFileMeta = {
  code: { dirname: string; filename: { base: string; ext: string } };
  style: { dirname: string | null; filename: { base: string | null; ext: string | null } };
};
