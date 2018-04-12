import React from 'react'
import { storiesOf } from '@storybook/react'
import FormGroup from '../formGroup'
import { Input } from '../input'
import Icon from '../icon'
import Button from '../button'
import Size from './'
import '../../index.css'

storiesOf('Size', module)
  .add('Mini', () =>
    <Size mini>
      <FormGroup>
        <Input placeholder="placeholder" />
        <Input placeholder="placeholder" />
        <Button primary>
          Send
        </Button>
      </FormGroup>
    </Size>
  )
  .add('Small', () =>
    <Size small>
      <FormGroup>
        <Input placeholder="placeholder" />
        <Input placeholder="placeholder" />
        <Button primary>
          Send
        </Button>
      </FormGroup>
    </Size>
  )
  .add('Medium', () =>
    <Size>
      <FormGroup>
        <Input placeholder="placeholder" />
        <Input placeholder="placeholder" />
        <Button primary>
          Send
        </Button>
      </FormGroup>
    </Size>
  )
  .add('Big', () =>
    <Size big>
      <FormGroup>
        <Input placeholder="placeholder" />
        <Input placeholder="placeholder" />
        <Button primary>
          Send
        </Button>
      </FormGroup>
    </Size>
  )
  .add('Large', () =>
    <Size large>
      <FormGroup>
        <Input placeholder="placeholder" />
        <Input placeholder="placeholder" />
        <Button primary>
          Send
        </Button>
      </FormGroup>
    </Size>
  )
