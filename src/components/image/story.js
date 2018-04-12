import React from 'react'
import { storiesOf } from '@storybook/react'
import Image from './'
import Label from '../label'
import '../../index.css'

storiesOf('Image', module)
  .add('default', () => <Image src="http://www.willaroz.pl/images/movie-square.jpg" />)
  .add('round', () => <Image round src="http://www.willaroz.pl/images/movie-square.jpg" />)
  .add('circle', () => <Image circle src="http://www.willaroz.pl/images/movie-square.jpg" />)
  .add('small', () =>
    <Label>
      <Image round small src="http://www.willaroz.pl/images/movie-square.jpg" />
      <span>Landscape Guy</span>
    </Label>
  )
  .add('medium', () =>
    <Label>
      <Image round medium src="http://www.willaroz.pl/images/movie-square.jpg" />
      <span>Landscape Guy</span>
    </Label>
  )
  .add('big', () =>
    <Label>
      <Image round big src="http://www.willaroz.pl/images/movie-square.jpg" />
      <span>Landscape Guy</span>
    </Label>
  )
  .add('large', () =>
    <Label>
      <Image round large src="http://www.willaroz.pl/images/movie-square.jpg" />
      <span>Landscape Guy</span>
    </Label>
  )