export type SupportedFrameworks = 'react';

export type StoryTabFileMeta = {
  dirname: string;
  codeFilename: { base: string; ext: string };
  styleFilename: { base: string | null; ext: string | null };
};
