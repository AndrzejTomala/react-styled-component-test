import React from 'react'
import { configure, storiesOf, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../src/theme/basic';

const req = require.context('../src', true, /story\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={Theme}>
    { storyFn() }
  </ThemeProvider>
);
addDecorator(ThemeDecorator);

configure(loadStories, module);
