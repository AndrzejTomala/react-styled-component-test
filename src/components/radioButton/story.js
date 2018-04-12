import React from 'react'
import { storiesOf } from '@storybook/react'
import RadioButton from './'
import '../../index.css'

storiesOf('RadioButton', module)
  .add('default', () =>
    <RadioButton>
      <input type="radio" id="radio" />
      <label for="radio">test</label>
    </RadioButton>
  )
  .add('disabled', () =>
    <RadioButton disabled>
      <input disabled type="radio" id="radio" />
      <label for="radio">test</label>
    </RadioButton>
  )

