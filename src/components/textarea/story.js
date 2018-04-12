import React from 'react'
import { storiesOf } from '@storybook/react'
import { Textarea, TextareaWrapper } from './'
import Label from '../label'
import '../../index.css'

storiesOf('Textarea', module)
  .add('default', () => <Textarea placeholder="placeholder" />)
  .add('full', () => <Textarea full placeholder="placeholder" />)
  .add('compact', () => <Textarea compact placeholder="placeholder" />)
  .add('disabled', () => <Textarea disabled placeholder="placeholder" />)
  .add('label', () =>
    <TextareaWrapper>
      <label> Some label</label>
      <Textarea>Some</Textarea>
    </TextareaWrapper>
  )
  .add('Float label', () =>
    <TextareaWrapper float>
      <label> Some label</label>
      <Textarea>Some</Textarea>
    </TextareaWrapper>
  )
  .add('Textarea with error', () =>
    <TextareaWrapper float>
      <label> Some label</label>
      <Textarea>Some</Textarea>
      <div class="message">
        <Label error compact arrowTop>Some bad thing happend</Label>
      </div>
    </TextareaWrapper>
  )


