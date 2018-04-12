import { css } from 'styled-components';

export const Theme = {
  main: {
    color: 'black',
    background: 'transparent',
    radius: '5px',
    grayLight: '#eee',
    grayMedium: '#aaa',
    grayDark: '#444',
    disabledOpacity: 0.5,
    errorColor: '#fff',
    errorBackground: '#d11'
  },
  primary: {
    color: '#f5f5f5',
    background: '#0f2a2e',
    border: '#15a'
  }
}

export const Sizes = {
  XS: 250,
  S:  510,
  M:  750,
  L:  990,
  XL: 1230
}

// Iterate through the sizes and create a media template
export const Media = Object.keys(Sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${Sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default {
  Theme,
  Sizes,
  Media
}