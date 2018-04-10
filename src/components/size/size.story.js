import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import FormGroup from '../formGroup'
import Input from '../input'
import Icon from '../icon'
import Button from '../button'
import Size from './'
import { ThemeProvider } from 'styled-components'
import Theme from '../../theme'
import '../../index.css'


storiesOf('Size', module)
  .add('Mini', () =>
    <ThemeProvider theme={Theme}>
      <Size mini>
        <FormGroup>
          <Input placeholder="placeholder" />
          <Input placeholder="placeholder" />
          <Button primary>
            Send
          </Button>
        </FormGroup>
      </Size>
    </ThemeProvider>)
  .add('Small', () =>
    <ThemeProvider theme={Theme}>
      <Size small>
        <FormGroup>
          <Input placeholder="placeholder" />
          <Input placeholder="placeholder" />
          <Button primary>
            Send
          </Button>
        </FormGroup>
      </Size>
    </ThemeProvider>)
  .add('Medium', () =>
    <ThemeProvider theme={Theme}>
      <Size>
        <FormGroup>
          <Input placeholder="placeholder" />
          <Input placeholder="placeholder" />
          <Button primary>
            Send
          </Button>
        </FormGroup>
      </Size>
    </ThemeProvider>)
  .add('Big', () =>
    <ThemeProvider theme={Theme}>
      <Size big>
        <FormGroup>
          <Input placeholder="placeholder" />
          <Input placeholder="placeholder" />
          <Button primary>
            Send
          </Button>
        </FormGroup>
      </Size>
    </ThemeProvider>)
  .add('Large', () =>
    <ThemeProvider theme={Theme}>
      <Size large>
        <FormGroup>
          <Input placeholder="placeholder" />
          <Input placeholder="placeholder" />
          <Button primary>
            Send
          </Button>
        </FormGroup>
      </Size>
    </ThemeProvider>)
