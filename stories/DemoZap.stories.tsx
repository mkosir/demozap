import type { Meta } from '@storybook/react';
import React from 'react';

import { _ButtonGreen } from './ButtonGreen/_ButtonGreen';
import { _ButtonRed } from './ButtonRed/_ButtonRed';
import { _Counter } from './Counter/_Counter';
import { _Default } from './Default/_Default';

import './DemoZap.scss';

const meta: Meta = {
  title: 'Examples',
};

export default meta;

export const Default = () => <_Default />;

export const ButtonGreen = () => <_ButtonGreen />;
ButtonGreen.storyName = 'Button Green - .jsx/.css';

export const ButtonRed = () => <_ButtonRed />;
ButtonRed.storyName = 'Button Red - .tsx/.scss';

export const Counter = () => <_Counter />;
