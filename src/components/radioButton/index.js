import styled, { css } from 'styled-components'
import { Media } from '../../theme/basic'
import radioButtonSVG from './radioButton.svg'

const RadioButton = styled.div`
  & > input {
    display: none;
  }

  & > label {
    cursor: pointer;
    position: relative;
    display: block;
    padding: 1em 0 1em 2.5em;

    ${Media.M`
      padding: 0.3em 0 0.3em 1.65em;
    `}

    &::before {
      content: "";
      display: block;
      width: 1.2em;
      height: 1.2em;
      left: 0;
      top: 50%;
      position: absolute;
      margin-top: -0.6em;
      background-color: ${props => props.theme.main.background};
      font-size: 1.5em;
      line-height: 0.6em;

      border: 1px solid ${props => props.theme.main.grayMedium};
      border-radius: 100%;

      ${Media.M`
        width: 1em;
        top: 50%;
        height: 1em;
        margin-top: -0.5em;
        font-size: 1em;
      `}
    }
  }

  & > input:checked + label::before {
    border: 1px solid ${props => props.theme.primary.background};
    background-image: url(${radioButtonSVG});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 0.75em auto;

    ${Media.M`
      background-size: 0.65em auto;
    `}
  }

  ${props => props.disabled && css`
    opacity: ${props => props.theme.main.disabledOpacity};
    & > label {
      cursor: not-allowed;
    }
  `}
`

export default RadioButton