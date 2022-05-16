import { SupportedFramework } from 'core/types';

import { getDemoZapFilePaths } from '../pipeline/01-getDemoZapFilePaths/getDemoZapFilePaths';
import { createDemoTabFilesMeta } from '../pipeline/02-createDemoTabFilesMeta/createDemoTabFilesMeta';
import { createDemoTabTemplates } from '../pipeline/03-createDemoTabTemplates/createDemoTabTemplates';
import { replaceDemoTabTemplatesContent } from '../pipeline/04-replaceDemoTabTemplatesContent/replaceDemoTabTemplatesContent';
import { logInfo, logSuccess, logError } from '../utils/log';

type GenerateRunParams = {
  flags: { framework?: SupportedFramework; prefix?: string };
};

type GenerateRun = (generateRunParams: GenerateRunParams) => void;

export const generateRun: GenerateRun = async ({ flags: { framework = 'react', prefix = '_' } }) => {
  switch (framework) {
    case 'react':
      break;
    case 'vue':
      break;
    case 'svelte':
      break;

    default:
      throw Error(`Framework ${framework} not supported`);
  }

  logInfo('Generating demos...');

  const { demoZapCodeFilePaths, demoZapStyleFilePaths } = getDemoZapFilePaths();
  logInfo(
    `Found ${demoZapCodeFilePaths.length + demoZapStyleFilePaths.length} DemoZap files (code: ${
      demoZapCodeFilePaths.length
    }, style: ${demoZapStyleFilePaths.length})`,
  );

  const demoTabFilesInfo = createDemoTabFilesMeta(demoZapCodeFilePaths, demoZapStyleFilePaths, prefix);

  try {
    const numOfCreatedDemoTabTemplates = await createDemoTabTemplates(demoTabFilesInfo);
    logInfo(`Created ${numOfCreatedDemoTabTemplates} DemoZap templates`);
  } catch (err) {
    logError(`Error occurred: ${err}`);
    return;
  }

  try {
    const numOfReplacedDemoTabTemplatesContent = await replaceDemoTabTemplatesContent(demoTabFilesInfo);
    logInfo(`Content replaced in ${numOfReplacedDemoTabTemplatesContent} DemoZap templates`);
  } catch (err) {
    logError(`Error occurred: ${err}`);
    return;
  }

  logSuccess('Completed!');
};
