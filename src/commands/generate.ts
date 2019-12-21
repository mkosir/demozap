import { Command, flags } from '@oclif/command';
const chalk = require('chalk');

import { findStoryTabFiles } from '../findStoryTabFiles';

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

  static flags = {
    prefix: flags.string({
      description: 'generate StoryTab components with filename prefix',
      default: '_',
    }),
  };

  async run() {
    const { args, flags } = this.parse(Generate);
    console.log('Log: flags.prefix', flags.prefix);

    const frameworkCapitalize = args.framework[0].toUpperCase() + args.framework.slice(1);
    this.log(chalk.blue(`Generating Storytab for ${frameworkCapitalize}...`));
    const storyTabFiles = findStoryTabFiles();
    console.log('Log: Generate -> run -> files', storyTabFiles);
    this.log(chalk.blue(`Found ${storyTabFiles.length} StoryTab files`));
    this.log(chalk.green('Completed!'));
    this.exit();
  }
}
