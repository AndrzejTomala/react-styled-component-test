import React from 'react'
import { storiesOf } from '@storybook/react'
import Label from './'
import Icon from '../icon'
import '../../index.css';

storiesOf('Label', module)
  .add('default', () => <Label>Default</Label>)
  .add('primary', () => <Label primary>Default</Label>)
  .add('compact', () => <Label compact>Default</Label>)
  .add('icon left', () =>
    <Label>
      <Icon name='arrow-circle-right' /><span>Default</span>
    </Label>
  )
  .add('icon right', () =>
    <Label>
      <span>Default</span><Icon name='arrow-circle-right' />
    </Label>
  )
  .add('icon only', () =>
    <Label>
      <Icon name='arrow-circle-right' />
    </Label>
  )
  .add('icon only compact', () =>
    <Label  compact>
      <Icon name='arrow-circle-right' />
    </Label>
  )
  .add('full width', () =>
    <Label full>
      <span>Default</span>
    </Label>
  )
  .add('full width 1 icon', () =>
    <Label full>
      <Icon name='arrow-circle-right' /><span>Default</span>
    </Label>
  )
  .add('full width 2 icons', () =>
    <Label full>
      <Icon name='arrow-circle-right' /><span>Default</span><Icon name='arrow-circle-right' />
    </Label>
  )
  .add('With arrow on top', () =>
    <Label arrowTop>
      <Icon name='arrow-circle-right' /><span>Default</span><Icon name='arrow-circle-right' />
    </Label>
  )