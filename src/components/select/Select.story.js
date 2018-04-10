import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Select from './'
import { ThemeProvider } from 'styled-components'
import Theme from '../../theme'
import '../../index.css'


storiesOf('Select', module)
  .add('default', () => <ThemeProvider theme={Theme}>
    <Select>
      <option> One </option>
      <option> Two </option>
      <option> Three </option>
    </Select>
  </ThemeProvider>)
  .add('compact', () => <ThemeProvider theme={Theme}>
    <Select compact>
      <option> One </option>
      <option> Two </option>
      <option> Three </option>
    </Select>
  </ThemeProvider>)
  .add('full', () => <ThemeProvider theme={Theme}>
    <Select full>
      <option> One </option>
      <option> Two </option>
      <option> Three </option>
    </Select>
  </ThemeProvider>)