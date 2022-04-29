import { storiesOf } from '@storybook/react';
import React from 'react';

import { _ButtonGreen } from './ButtonGreen/_ButtonGreen';
import { _ButtonRed } from './ButtonRed/_ButtonRed';
import { _Counter } from './Counter/_Counter';
import { _Default } from './Default/_Default';

import './DemoZap.scss';

const stories = storiesOf('Examples', module);

stories
  .add('Default', () => <_Default />)
  .add('Button Green - .jsx/.css', () => <_ButtonGreen />)
  .add('Button Red - .tsx/.scss', () => <_ButtonRed />)
  .add('Counter', () => <_Counter />);
