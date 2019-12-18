import { Command, flags } from '@oclif/command';
const chalk = require('chalk');

import { copyStoryTabComponent } from '../StoryTabComponent/copyStoryTabComponent';

export default class Generate extends Command {
  static description = 'generate documentation';

  static flags = {
    react: flags.boolean({ description: 'generate StoryTab for React' }),
  };

  async run() {
    const { flags } = this.parse(Generate);

    if (flags.react) {
      this.log(chalk.blue('Generating Storytab for React...'));
      await copyStoryTabComponent('React');
      this.log(chalk.green('StoryTab component was copied to destination'));
      this.log(chalk.green('Completed!'));
      this.exit();
    }

    this.warn(chalk.yellow('Please provide project option (React, Vue...)'));
  }
}
