import { Command, flags } from '@oclif/command';
const chalk = require('chalk');

import { getStoryTabFilesInfo } from '../getStoryTabFilesInfo';
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

    const frameworkCapitalize = args.framework[0].toUpperCase() + args.framework.slice(1);
    this.log(chalk.blue(`Generating Storytab for ${frameworkCapitalize}...`));
    const storyTabFilesInfo = getStoryTabFilesInfo();
    this.log(chalk.blue(`Found ${storyTabFilesInfo.length} StoryTab files`));
    const numOfCreatedStoryTabComponents = await createStoryTabComponents(
      storyTabFilesInfo,
      args.framework,
      flags.prefix,
    );
    this.log(chalk.blue(`Created ${numOfCreatedStoryTabComponents} StoryTab components`));
    this.log(chalk.green('Completed!'));
    this.exit();
  }
}
