import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from './'
import '../../index.css'

storiesOf('Icon', module)
  .add('rocket', () => <Icon name='rocket' />)
  .add('caret-down', () => <Icon name='caret-down' />)
  .add('caret-up', () => <Icon name='caret-up' />)
  .add('check', () => <Icon name='check' />)
  .add('circle', () => <Icon name='circle' />)
  .add('angle-right', () => <Icon name='angle-right' />)
  .add('folder', () => <Icon name='folder' />)
