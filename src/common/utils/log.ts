import chalk from 'chalk';

const consoleLog = console.log;

const logInfo = (message: string) => consoleLog(chalk.blue(message));
const logInfoSecondary = (message: string) => consoleLog(chalk.gray(message));
const logSuccess = (message: string) => consoleLog(chalk.bold.green(message));
const logError = (message: string) => consoleLog(chalk.red(message));

export const log = {
  info: logInfo,
  infoSecondary: logInfoSecondary,
  success: logSuccess,
  error: logError,
};
