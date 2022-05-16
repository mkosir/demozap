import { Command, Flags } from '@oclif/core';

import { SupportedFramework } from 'core/types';

import { generateRun } from '../core/commands/generate';

// eslint-disable-next-line
export default class Generate extends Command {
  static description = 'Generate React|Vue|Svelte components demos in a zap';

  static flags = {
    prefix: Flags.string({
      description: 'Generate demos with filename prefix',
      default: '_',
    }),
    framework: Flags.enum<SupportedFramework>({
      options: ['react', 'vue', 'svelte'],
      description: 'Generate demos for preferred framework',
      default: 'react',
    }),
  };

  async run(): Promise<void> {
    const {
      flags: { framework, prefix },
    } = await this.parse(Generate);

    generateRun({
      flags: { framework, prefix },
    });
  }
}
