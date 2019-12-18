const fs = require('fs');

export const generateStoryTabReact = () => {
  const CURR_DIR = process.cwd();
  const path = `${CURR_DIR}/src/StoryTabReact/Component`;
  console.log('Log: generateStoryTabReact -> CURR_DIR', CURR_DIR);

  fs.copyFile(`${path}/StoryTab.tsx`, 'stories/destination.tsx', err => {
    if (err) throw err;
  });
};
