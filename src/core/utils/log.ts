import chalk from 'chalk';

const log = console.log;

export const logInfo = (message: string) => log(chalk.blue(message));
export const logSuccess = (message: string) => log(chalk.bold.green(message));
export const logError = (message: string) => log(chalk.red(message));
