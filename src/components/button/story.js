import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './'
import Icon from '../icon'
import '../../index.css';

storiesOf('Button', module)
  .add('default', () => <Button>Default</Button>)
  .add('primary', () => <Button primary>Default</Button>)
  .add('compact', () => <Button primary compact>Default</Button>)
  .add('icon left', () =>
    <Button primary>
      <Icon name='arrow-circle-right' /><span>Default</span>
    </Button>
  )
  .add('icon right', () =>
    <Button primary>
      <span>Default</span><Icon name='arrow-circle-right' />
    </Button>
  )
  .add('icon only', () =>
    <Button primary>
      <Icon name='arrow-circle-right' />
    </Button>
  )
  .add('icon only compact', () =>
    <Button primary compact>
      <Icon name='arrow-circle-right' />
    </Button>
  )
  .add('full width', () =>
    <Button full primary>
      <span>Default</span>
    </Button>
  )
  .add('full width 1 icon', () =>
    <Button full primary>
      <Icon name='arrow-circle-right' /><span>Default</span>
    </Button>
  )
  .add('full width 2 icons', () =>
    <Button full primary>
      <Icon name='arrow-circle-right' /><span>Default</span><Icon name='arrow-circle-right' />
    </Button>
  )