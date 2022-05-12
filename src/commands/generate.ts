import { Command, Flags } from '@oclif/core';

import { getDemoTabFilePaths } from '../pipeline/01-getDemoTabFilePaths/getDemoTabFilePaths';
import { createDemoTabFilesMeta } from '../pipeline/02-createDemoTabFilesMeta/createDemoTabFilesMeta';
import { createDemoTabTemplates } from '../pipeline/03-createDemoTabTemplates/createDemoTabTemplates';
import { replaceDemoTabTemplatesContent } from '../pipeline/04-replaceDemoTabTemplatesContent/replaceDemoTabTemplatesContent';

const chalk = require('chalk');

type SupportedFramework = 'react' | 'vue' | 'svelte';

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
    const { flags } = await this.parse(Generate);

    switch (flags.framework) {
      case 'react':
        break;
      case 'vue':
        break;
      case 'svelte':
        break;

      default:
        throw Error(`Framework ${flags.framework} not supported`);
    }

    this.log(chalk.blue(`Generating demos...`));

    const { demoTabCodeFilePaths, demoTabStyleFilePaths } = getDemoTabFilePaths();
    this.log(
      chalk.blue(
        `Found ${demoTabCodeFilePaths.length + demoTabStyleFilePaths.length} DemoZap files (code: ${
          demoTabCodeFilePaths.length
        }, style: ${demoTabStyleFilePaths.length})`,
      ),
    );

    const demoTabFilesInfo = createDemoTabFilesMeta(demoTabCodeFilePaths, demoTabStyleFilePaths, flags.prefix);

    try {
      const numOfCreatedDemoTabTemplates = await createDemoTabTemplates(demoTabFilesInfo);
      this.log(chalk.blue(`Created ${numOfCreatedDemoTabTemplates} DemoZap templates`));
    } catch (err) {
      console.error('Error occurred:', err);
      this.exit();
    }

    try {
      const numOfReplacedDemoTabTemplatesContent = await replaceDemoTabTemplatesContent(demoTabFilesInfo);
      this.log(chalk.blue(`Content replaced in ${numOfReplacedDemoTabTemplatesContent} DemoZap templates`));
    } catch (err) {
      console.error('Error occurred:', err);
      this.exit();
    }

    this.log(chalk.green('Completed!'));
  }
}
