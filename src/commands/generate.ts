import { Command, flags } from '@oclif/command';

import { getDemoTabFilePaths } from '../pipeline/01-getDemoTabFilePaths/getDemoTabFilePaths';
import { createDemoTabFilesMeta } from '../pipeline/02-createDemoTabFilesMeta/createDemoTabFilesMeta';
import { createDemoTabTemplates } from '../pipeline/03-createDemoTabTemplates/createDemoTabTemplates';
import { replaceDemoTabTemplatesContent } from '../pipeline/04-replaceDemoTabTemplatesContent/replaceDemoTabTemplatesContent';

const chalk = require('chalk');

export default class Generate extends Command {
  static description = 'generate demos with DemoTab';

  static flags = {
    prefix: flags.string({
      description: 'generate DemoTab components with filename prefix',
      default: '_',
    }),
  };

  async run() {
    const { flags } = this.parse(Generate);

    this.log(chalk.blue(`Generating demos...`));

    const { demoTabCodeFilePaths, demoTabStyleFilePaths } = getDemoTabFilePaths();
    this.log(
      chalk.blue(
        `Found ${demoTabCodeFilePaths.length + demoTabStyleFilePaths.length} DemoTab files (code: ${
          demoTabCodeFilePaths.length
        }, style: ${demoTabStyleFilePaths.length})`,
      ),
    );

    const demoTabFilesInfo = createDemoTabFilesMeta(demoTabCodeFilePaths, demoTabStyleFilePaths, flags.prefix);

    try {
      const numOfCreatedDemoTabTemplates = await createDemoTabTemplates(demoTabFilesInfo);
      this.log(chalk.blue(`Created ${numOfCreatedDemoTabTemplates} DemoTab templates`));
    } catch (err) {
      console.error('Error occurred:', err);
      this.exit();
    }

    try {
      const numOfReplacedDemoTabTemplatesContent = await replaceDemoTabTemplatesContent(demoTabFilesInfo);
      this.log(chalk.blue(`Content replaced in ${numOfReplacedDemoTabTemplatesContent} DemoTab templates`));
    } catch (err) {
      console.error('Error occurred:', err);
      this.exit();
    }

    this.log(chalk.green('Completed!'));
  }
}
