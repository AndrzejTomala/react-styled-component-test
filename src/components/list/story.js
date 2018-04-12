import React from 'react'
import { storiesOf } from '@storybook/react'
import { List, ListItem } from './'
import '../../index.css'

storiesOf('List', module)
  .add('default', () =>
    <List>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
    </List>
  )
  .add('nested', () =>
    <List>
      <ListItem>List item</ListItem>
      <ListItem parent>
        <List>
          <ListItem>List item</ListItem>
          <ListItem>List item</ListItem>
          <ListItem>List item</ListItem>
          <ListItem>List item</ListItem>
        </List>
      </ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
    </List>
  )
  .add('compact', () =>
    <List compact>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
    </List>
  )
  .add('nested compact', () =>
    <List compact>
      <ListItem>List item</ListItem>
      <ListItem parent>
        <List compact>
          <ListItem>List item</ListItem>
          <ListItem>List item</ListItem>
          <ListItem>List item</ListItem>
          <ListItem>List item</ListItem>
        </List>
      </ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
    </List>
  )
  .add('arrow icon', () =>
    <List compact arrow>
      <ListItem>List item</ListItem>
      <ListItem parent>
        <List compact arrow>
          <ListItem>List item</ListItem>
          <ListItem>List item</ListItem>
          <ListItem>List item</ListItem>
          <ListItem>List item</ListItem>
        </List>
      </ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
    </List>
  )
  .add('folder icon', () =>
    <List compact folder>
      <ListItem>List item</ListItem>
      <ListItem parent>
        <List compact folder>
          <ListItem>List item</ListItem>
          <ListItem>List item</ListItem>
          <ListItem>List item</ListItem>
          <ListItem>List item</ListItem>
        </List>
      </ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
    </List>
  )
  .add('dot icon', () =>
    <List compact dot>
      <ListItem>List item</ListItem>
      <ListItem parent>
        <List compact dot>
          <ListItem>List item</ListItem>
          <ListItem>List item</ListItem>
          <ListItem>List item</ListItem>
          <ListItem>List item</ListItem>
        </List>
      </ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
      <ListItem>List item</ListItem>
    </List>
)