import React from 'react';
import { storiesOf } from '@storybook/react';

import Default from './Default/_Default';
import ButtonGreen from './ButtonGreen/_ButtonGreen';
import ButtonRed from './ButtonRed/_ButtonRed';
import EscapeStringComponent from './EscapeStringComponent/_EscapeStringComponent';

import './StoryTab.scss';

const stories = storiesOf('StoryTab 📑 - React', module);

stories
  .add('Default', () => <Default />)
  .add('Button Green - .jsx/.css', () => <ButtonGreen />)
  .add('Button Red - .tsx/.scss', () => <ButtonRed />)
  .add('Escape String Component', () => <EscapeStringComponent />);
