import { Command, flags } from '@oclif/command';
const chalk = require('chalk');

import { generateStoryTabReact } from '../StoryTabReact/generateStoryTabReact';

export default class Generate extends Command {
  static description = 'generate documentation';

  static flags = {
    react: flags.boolean({ description: 'generate StoryTab for React' }),
  };

  async run() {
    const { flags } = this.parse(Generate);

    if (flags.react) {
      this.log('Generating Storytab for React...');
      generateStoryTabReact();
      this.log('StoryTab component was copied to destination');
      await new Promise(res => setTimeout(res, 2000));
      this.exit();
    }

    this.warn(chalk.yellow('Please provide project option (React, Vue...)'));
  }
}
