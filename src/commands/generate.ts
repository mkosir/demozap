import { Command, flags } from '@oclif/command';
const chalk = require('chalk');

import { findStoryTabFilePaths } from '../findStoryTabFilePaths';
import { createStoryTabComponents } from '../createStoryTabComponents';

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
    const storyTabFilePaths = findStoryTabFilePaths();
    this.log(chalk.blue(`Found ${storyTabFilePaths.length} StoryTab files`));
    const numOfCreatedStoryTabComponents = createStoryTabComponents(
      storyTabFilePaths,
      args.framework,
    );
    this.log(chalk.blue(`Created ${numOfCreatedStoryTabComponents} StoryTab components`));
    this.log(chalk.green('Completed!'));
    this.exit();
  }
}
