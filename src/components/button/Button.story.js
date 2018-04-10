import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './'
import Icon from '../icon'
import { ThemeProvider } from 'styled-components';
import Theme from '../../theme'
import '../../index.css';

storiesOf('Button', module)
  .add('default', () => <ThemeProvider theme={Theme}><Button onClick={action('button-click')}>Default</Button></ThemeProvider>)
  .add('primary', () => <ThemeProvider theme={Theme}><Button primary onClick={action('button-click')}>Default</Button></ThemeProvider>)
  .add('compact', () => <ThemeProvider theme={Theme}><Button primary compact onClick={action('button-click')}>Default</Button></ThemeProvider>)
  .add('icon left', () =>
    <ThemeProvider theme={Theme}>
      <Button primary onClick={action('button-click')}>
        <Icon name='arrow-circle-right' /><span>Default</span>
      </Button>
    </ThemeProvider>)
  .add('icon right', () =>
    <ThemeProvider theme={Theme}>
      <Button primary onClick={action('button-click')}>
        <span>Default</span><Icon name='arrow-circle-right' />
      </Button>
    </ThemeProvider>)
  .add('icon only', () =>
    <ThemeProvider theme={Theme}>
      <Button primary onClick={action('button-click')}>
        <Icon name='arrow-circle-right' />
      </Button>
    </ThemeProvider>)
  .add('icon only compact', () =>
    <ThemeProvider theme={Theme}>
      <Button primary compact onClick={action('button-click')}>
        <Icon name='arrow-circle-right' />
      </Button>
    </ThemeProvider>)
  .add('full width', () =>
    <ThemeProvider theme={Theme}>
      <Button full primary onClick={action('button-click')}>
        <span>Default</span>
      </Button>
    </ThemeProvider>)
  .add('full width 1 icon', () =>
    <ThemeProvider theme={Theme}>
      <Button full primary onClick={action('button-click')}>
        <Icon name='arrow-circle-right' /><span>Default</span>
      </Button>
    </ThemeProvider>)
  .add('full width 2 icons', () =>
    <ThemeProvider theme={Theme}>
      <Button full primary onClick={action('button-click')}>
        <Icon name='arrow-circle-right' /><span>Default</span><Icon name='arrow-circle-right' />
      </Button>
    </ThemeProvider>)