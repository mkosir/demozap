import { cliParse } from 'cliParse';
import { log, VERSION_INFO } from 'common/utils';
import { generateDemos } from 'core';

const execute = async () => {
  log.info(`##### ⚡ DemoZap ${VERSION_INFO} #####`);

  try {
    const { shouldExitCli, prefix, framework } = cliParse();

    if (shouldExitCli) {
      return;
    }

    await generateDemos({ flags: { prefix, framework } });
  } catch (err) {
    log.error(err as string);
  }
};

void execute();
