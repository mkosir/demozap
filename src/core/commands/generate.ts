import { SupportedFramework } from 'core/types';

import { getDemoZapFilePaths } from '../pipeline/01-getDemoZapFilePaths';
import { createDemoZapFilesMeta } from '../pipeline/02-createDemoZapFilesMeta';
import { createDemoZapTemplates } from '../pipeline/03-createDemoZapTemplates';
import { replaceDemoZapTemplatesContent } from '../pipeline/04-replaceDemoZapTemplatesContent/replaceDemoZapTemplatesContent';
import { logInfo, logSuccess, logError } from '../utils/log';

type GenerateRunParams = {
  flags: { framework?: SupportedFramework; prefix?: string };
};

type GenerateRun = (generateRunParams: GenerateRunParams) => Promise<void>;

export const generateRun: GenerateRun = async ({ flags: { framework = 'react', prefix = '_' } }) => {
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

  logInfo('Generating demos...');

  const { demoZapCodeFilePaths, demoZapStyleFilePaths } = getDemoZapFilePaths();
  logInfo(
    `Found ${demoZapCodeFilePaths.length.toString() + demoZapStyleFilePaths.length.toString()} DemoZap files (code: ${demoZapCodeFilePaths.length.toString()}, style: ${demoZapStyleFilePaths.length.toString()})`,
  );

  const demoTabFilesInfo = createDemoZapFilesMeta({ demoZapCodeFilePaths, demoZapStyleFilePaths, prefix });

  try {
    const numOfCreatedDemoTabTemplates = await createDemoZapTemplates(demoTabFilesInfo);
    logInfo(`Created ${numOfCreatedDemoTabTemplates.toString()} DemoZap templates`);
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    logError(`Error occurred: ${err}`);
    return;
  }

  try {
    const numOfReplacedDemoTabTemplatesContent = await replaceDemoZapTemplatesContent(demoTabFilesInfo);
    logInfo(`Content replaced in ${numOfReplacedDemoTabTemplatesContent.toString()} DemoZap templates`);
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    logError(`Error occurred: ${err}`);
    return;
  }

  logSuccess('Completed!');
};
