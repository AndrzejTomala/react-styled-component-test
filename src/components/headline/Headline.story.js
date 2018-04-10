import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Headline from './'
import { ThemeProvider } from 'styled-components'
import Theme from '../../theme'
import '../../index.css'


storiesOf('Headline', module)
  .add('default', () => <ThemeProvider theme={Theme}><Headline>Default headline</Headline></ThemeProvider>)
  .add('primary', () => <ThemeProvider theme={Theme}><Headline primary>Primary headline</Headline></ThemeProvider>)

