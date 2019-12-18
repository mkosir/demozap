import { Command, flags } from '@oclif/command';
import cli from 'cli-ux';
const chalk = require('chalk');

export default class Generate extends Command {
  static description = 'generate documentation';

  static flags = {
    react: flags.boolean({ description: 'generate StoryTab for React' }),

    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  };

  async run() {
    const { flags } = this.parse(Generate);

    if (flags.react) {
      cli.action.start('Generating Storytab for React...');
      await new Promise(res => setTimeout(res, 2000));
      this.exit();
    }

    this.warn(chalk.yellow('Please provide project option (React, Vue...)'));
  }
}
