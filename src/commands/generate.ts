import { Command, flags } from '@oclif/command';
import cli from 'cli-ux';

export default class Generate extends Command {
  static description = 'generate documentation';

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  };

  static args = [{ name: 'file' }];

  async run() {
    cli.action.start('Generating...');
    await new Promise(res => setTimeout(res, 3000));

    const { args, flags } = this.parse(Generate);

    const name = flags.name || 'world';
    this.log(
      `hello ${name} from /Users/mkosir/Desktop/Projects-GitHub/story-tab/src/commands/generate.ts`,
    );
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
