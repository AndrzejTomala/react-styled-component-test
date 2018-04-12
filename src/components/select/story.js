import React from 'react'
import { storiesOf } from '@storybook/react'
import Select from './'
import '../../index.css'

storiesOf('Select', module)
  .add('default', () =>
    <Select>
      <option> One </option>
      <option> Two </option>
      <option> Three </option>
    </Select>
  )
  .add('compact', () =>
    <Select compact>
      <option> One </option>
      <option> Two </option>
      <option> Three </option>
    </Select>
  )
  .add('full', () =>
    <Select full>
      <option> One </option>
      <option> Two </option>
      <option> Three </option>
    </Select>
  )