export const createStoryTabComponents = (storyTabFilePaths: Array<string>): number => {
  let numOfCreatedStoryTabComponents = 0;

  storyTabFilePaths.map(storyTabFilePath => {
    console.log(`storyTabFilePath[${numOfCreatedStoryTabComponents}]: `, storyTabFilePath);
    numOfCreatedStoryTabComponents++;
  });

  return numOfCreatedStoryTabComponents;
};
