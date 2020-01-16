export const escapeFileContent = (fileContent: string) => {
  let reg = /`/g;
  const escapedBackticks = fileContent.replace(reg, '\\`');
  reg = /\$/g;
  const escapedDollarSigns = escapedBackticks.replace(reg, '\\$');
  return escapedDollarSigns;
};
