/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { cac } from 'cac';

import { VERSION_INFO } from 'common/utils';
import { SUPPORTED_FRAMEWORKS, type SupportedFramework } from 'core/types';

type CliOption = {
  nameLong?: string;
  nameShort?: string;
  default?: string | boolean;
  description?: string;
};
type CliOptions = Record<string, CliOption>;

const CLI_OPTIONS = {
  prefix: {
    nameLong: 'prefix',
    nameShort: 'p',
    default: '_',
    description: 'Generate demos with filename prefix',
  },
  framework: {
    nameLong: 'framework',
    default: 'react',
    description: `Generate demos for preferred framework ${SUPPORTED_FRAMEWORKS.join('|')}`,
  },
  help: { nameLong: 'help', nameShort: 'h' },
  version: { nameLong: 'version', nameShort: 'v' },
} as const satisfies CliOptions;

type CliParseResult = {
  shouldExitCli: boolean;
  prefix: string;
  framework: SupportedFramework;
};

export const cliParse = (): CliParseResult => {
  const cli = cac('demozap');

  cli.option(
    `-${CLI_OPTIONS.prefix.nameShort}, --${CLI_OPTIONS.prefix.nameLong} <prefix>`,
    CLI_OPTIONS.prefix.description,
    {
      default: CLI_OPTIONS.prefix.default,
    },
  );

  cli.option(`--${CLI_OPTIONS.framework.nameLong} <type>`, CLI_OPTIONS.framework.description, {
    default: CLI_OPTIONS.framework.default,
  });

  cli.help();
  cli.version(VERSION_INFO);

  const cliParams = cli.parse();

  const unknownOptions = checkForUnknownOptions({
    cliOptions: CLI_OPTIONS,
    options: Object.keys(cliParams.options).filter((option) => option !== '--'),
  });
  if (unknownOptions.length > 0) {
    throw new Error(
      `Unknown ${unknownOptions.length === 1 ? 'option' : 'options'} passed to CLI: ${unknownOptions.join(', ')}.`,
    );
  }

  // console.log(JSON.stringify(cliParams, null, 2));

  return {
    shouldExitCli: cliParams.options.help || cliParams.options.version,
    prefix: cliParams.options.prefix,
    framework: cliParams.options.framework,
  };
};

type CheckForUnknownOptionsParams = {
  cliOptions: CliOptions;
  options: ReadonlyArray<string>;
};

const checkForUnknownOptions = ({ cliOptions, options }: CheckForUnknownOptionsParams): ReadonlyArray<string> => {
  const allowedCliOptions = Object.values(cliOptions)
    .map((option) => [option.nameLong, option.nameShort])
    .flat()
    .filter((option) => option);

  const unknownOptions = options.filter((option) => !allowedCliOptions.includes(option));
  return unknownOptions;
};
