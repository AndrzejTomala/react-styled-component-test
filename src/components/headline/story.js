import React from 'react'
import { storiesOf } from '@storybook/react'
import Headline from './'
import '../../index.css'

storiesOf('Headline', module)
  .add('default', () => <Headline>Default headline</Headline>)
  .add('primary', () => <Headline primary>Primary headline</Headline>)
  .add('compact', () => <Headline compact>Primary headline</Headline>)

