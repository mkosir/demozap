import { addParameters, configure } from '@storybook/react';
import theme from './config-theme';

addParameters({
  options: {
    theme: theme,
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: false,
  },
});

const req = require.context('../examples/react', true, /.story.(tsx?|ts?)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
