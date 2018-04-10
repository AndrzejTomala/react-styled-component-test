import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Input from './'
import { ThemeProvider } from 'styled-components'
import Theme from '../../theme'
import '../../index.css'


storiesOf('Input', module)
  .add('default', () => <ThemeProvider theme={Theme}><Input placeholder="placeholder" /></ThemeProvider>)
  .add('full', () => <ThemeProvider theme={Theme}><Input full placeholder="placeholder" /></ThemeProvider>)
  .add('compact', () => <ThemeProvider theme={Theme}><Input compact placeholder="placeholder" /></ThemeProvider>)

