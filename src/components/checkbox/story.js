import React from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from './'
import '../../index.css'

storiesOf('Checkbox', module)
  .add('default', () =>
    <Checkbox>
      <input type="checkbox" id="checkbox" />
      <label for="checkbox">test</label>
    </Checkbox>
  )
  .add('disabled', () =>
    <Checkbox disabled>
      <input disabled type="checkbox" id="checkbox" />
      <label for="checkbox">test</label>
    </Checkbox>
  )
