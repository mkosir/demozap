export type SupportedFrameworks = 'react';

export type StoryTabFileInfo = {
  dirname: string;
  codeFilename: { base: string; ext: string };
  styleFilename: { base: string | null; ext: string | null };
};
