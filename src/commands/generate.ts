import { Command } from '@oclif/command';
const chalk = require('chalk');

import { copyStoryTabTemplate } from '../copyStoryTabTemplate';

export default class Generate extends Command {
  static description = 'generate documentation';

  static args = [
    {
      name: 'framework',
      description: 'generate StoryTab for desired framework',
      required: true,
      options: ['react'],
    },
  ];

  async run() {
    const { args } = this.parse(Generate);

    const frameworkCapitalize = args.framework[0].toUpperCase() + args.framework.slice(1);
    this.log(chalk.blue(`Generating Storytab for ${frameworkCapitalize}...`));
    await copyStoryTabTemplate(args.framework);
    this.log(chalk.blue('StoryTab component was copied to destination'));
    this.log(chalk.green('Completed!'));
    this.exit();
  }
}
