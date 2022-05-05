import { Command, Flags } from '@oclif/core';

// eslint-disable-next-line
const tsConfigPaths = require('tsconfig-paths');
// eslint-disable-next-line
const tsConfig = require('../../tsconfig.base.json');

tsConfigPaths.register({
  baseUrl: './dist',
  paths: tsConfig.compilerOptions.paths,
});

import { getDemoTabFilePaths } from 'pipeline/01-getDemoTabFilePaths/getDemoTabFilePaths';
import { createDemoTabFilesMeta } from 'pipeline/02-createDemoTabFilesMeta/createDemoTabFilesMeta';
import { createDemoTabTemplates } from 'pipeline/03-createDemoTabTemplates/createDemoTabTemplates';
import { replaceDemoTabTemplatesContent } from 'pipeline/04-replaceDemoTabTemplatesContent/replaceDemoTabTemplatesContent';

const chalk = require('chalk');

// eslint-disable-next-line
export default class Generate extends Command {
  static description = 'generate demos with DemoZap';

  static flags = {
    prefix: Flags.string({
      description: 'generate DemoZap components with filename prefix',
      default: '_',
    }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(Generate);

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
