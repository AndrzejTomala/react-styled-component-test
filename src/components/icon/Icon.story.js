import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Icon from './'
import { ThemeProvider } from 'styled-components';
import Theme from '../../theme'
import '../../index.css'

storiesOf('Icon', module)
  .add('rocket', () => <ThemeProvider theme={Theme}><Icon name='rocket' /></ThemeProvider>)
  .add('carret-down', () => <ThemeProvider theme={Theme}><Icon name='caret-down' /></ThemeProvider>)
  .add('carret-up', () => <ThemeProvider theme={Theme}><Icon name='caret-up' /></ThemeProvider>)
