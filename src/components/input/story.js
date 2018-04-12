import React from 'react'
import { storiesOf } from '@storybook/react'
import { Input, InputWrapper } from './'
import Label from '../label'
import '../../index.css'

storiesOf('Input', module)
  .add('default', () => <Input placeholder="placeholder" />)
  .add('full', () => <Input full placeholder="placeholder" />)
  .add('compact', () => <Input compact placeholder="placeholder" />)
  .add('disabled', () => <Input disabled placeholder="placeholder" />)
  .add('label', () =>
    <InputWrapper>
      <label> Some label</label>
      <Input placeholder="placeholder" />
    </InputWrapper>
  )
  .add('Float label', () =>
    <InputWrapper float>
      <label> Some label</label>
      <Input placeholder="placeholder" />
    </InputWrapper>
  )
  .add('Input with error', () =>
    <InputWrapper float>
      <label> Some label</label>
      <Input placeholder="placeholder" />
      <div class="message">
        <Label error compact arrowTop>Some bad thing happend</Label>
      </div>
    </InputWrapper>
  )


