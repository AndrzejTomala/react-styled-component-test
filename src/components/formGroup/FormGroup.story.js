import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import FormGroup from './'
import Input from '../input'
import Icon from '../icon'
import Button from '../button'
import { ThemeProvider } from 'styled-components'
import Theme from '../../theme'
import '../../index.css'


storiesOf('FormGroup', module)
  .add('default', () =>
    <ThemeProvider theme={Theme}>
      <FormGroup>
        <Input placeholder="placeholder" />
        <Input placeholder="placeholder" />
        <Button primary>
          Send
        </Button>
      </FormGroup>
    </ThemeProvider>)
  .add('buttons', () =>
    <ThemeProvider theme={Theme}>
      <FormGroup>
        <Button primary>
          Send
        </Button>
        <Button full>
          Send
        </Button>
        <Button primary>
          Send
        </Button>
      </FormGroup>
    </ThemeProvider>)
  .add('space', () =>
    <ThemeProvider theme={Theme}>
      <FormGroup space>
        <Input placeholder="placeholder" />
        <Input placeholder="placeholder" />
        <Button primary>
          Send
        </Button>
      </FormGroup>
    </ThemeProvider>)

