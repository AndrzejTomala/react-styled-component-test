import React from 'react'
import { storiesOf } from '@storybook/react'
import FormGroup from './'
import { Input, InputWrapper } from '../input'
import Icon from '../icon'
import Button from '../button'
import Label from '../label'
import '../../index.css'

storiesOf('FormGroup', module)
  .add('default', () =>
    <FormGroup>
      <Input placeholder="placeholder" />
      <Input placeholder="placeholder" />
      <Button primary>
        Send
      </Button>
    </FormGroup>
  )
  .add('buttons', () =>
    <FormGroup>
      <Button primary>
        Send
      </Button>
      <Button primary>
        Send
      </Button>
      <Button primary>
        Send
      </Button>
    </FormGroup>
  )
  .add('space', () =>
    <FormGroup space>
      <Input placeholder="placeholder" />
      <Input placeholder="placeholder" />
      <Button primary>
        Send
      </Button>
    </FormGroup>
  )
  .add('Input with labels', () =>
    <FormGroup>
      <InputWrapper>
        <label>Some label</label>
        <Input placeholder="placeholder" />
      </InputWrapper>
      <InputWrapper>
        <label>Some label</label>
        <Input placeholder="placeholder" />
      </InputWrapper>
      <Button primary>
        Send
      </Button>
    </FormGroup>
  )
  .add('Input with labels space', () =>
    <FormGroup space>
      <InputWrapper>
        <label>Some label</label>
        <Input placeholder="placeholder" />
      </InputWrapper>
      <InputWrapper>
        <label>Some label</label>
        <Input placeholder="placeholder" />
      </InputWrapper>
      <Button primary>
        Send
      </Button>
    </FormGroup>
  )
  .add('Nested Form group', () =>
    <FormGroup space>
      <FormGroup full>
        <InputWrapper full>
          <label>Some label</label>
          <Input placeholder="placeholder" />
        </InputWrapper>
        <Label>
          <Icon name='euro-sign' />
        </Label>
      </FormGroup>
      <InputWrapper full>
        <label>Some label</label>
        <Input placeholder="placeholder" />
        <div class="message">
          <Label error compact arrowTop>Some really really really really really really bad thing happend</Label>
        </div>
      </InputWrapper>
      <Button primary>
        Send
      </Button>
    </FormGroup>
  )
