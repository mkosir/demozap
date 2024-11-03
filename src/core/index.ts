import { calculateTimeSpan, log } from 'common/utils';

import { getDemoZapFilePaths } from './pipeline/01-getDemoZapFilePaths';
import { createDemoZapFilesMeta } from './pipeline/02-createDemoZapFilesMeta';
import { createDemoZapTemplates } from './pipeline/03-createDemoZapTemplates';
import { replaceDemoZapTemplatesContent } from './pipeline/04-replaceDemoZapTemplatesContent/replaceDemoZapTemplatesContent';
import { SupportedFramework } from './types';

type GenerateDemosParams = {
  flags: { framework?: SupportedFramework; prefix?: string };
};

type GenerateDemos = (generateDemosParams: GenerateDemosParams) => Promise<void>;

export const generateDemos: GenerateDemos = async ({ flags: { framework = 'react', prefix = '_' } }) => {
  const startTime = performance.now();

  switch (framework) {
    case 'react':
      break;
    case 'vue':
      break;
    case 'svelte':
      break;

    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw Error(`Framework ${framework} not supported`);
  }

  log.info('Generating demos...');

  const { demoZapCodeFilePaths, demoZapStyleFilePaths } = getDemoZapFilePaths();
  log.info(
    `Found ${demoZapCodeFilePaths.length.toString() + demoZapStyleFilePaths.length.toString()} DemoZap files (code: ${demoZapCodeFilePaths.length.toString()}, style: ${demoZapStyleFilePaths.length.toString()})`,
  );

  const demoTabFilesInfo = createDemoZapFilesMeta({ demoZapCodeFilePaths, demoZapStyleFilePaths, prefix });

  try {
    const numOfCreatedDemoTabTemplates = await createDemoZapTemplates(demoTabFilesInfo);
    log.info(`Created ${numOfCreatedDemoTabTemplates.toString()} DemoZap templates`);
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    log.error(`Error occurred: ${err}`);
    return;
  }

  try {
    const numOfReplacedDemoTabTemplatesContent = await replaceDemoZapTemplatesContent(demoTabFilesInfo);
    log.info(`Content replaced in ${numOfReplacedDemoTabTemplatesContent.toString()} DemoZap templates`);
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    log.error(`Error occurred: ${err}`);
    return;
  }

  const endTime = performance.now();
  log.success(`Completed (${calculateTimeSpan({ startTime, endTime })})`);
};
