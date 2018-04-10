import styled, { css } from 'styled-components';
import carretDown from './carret-down.svg';
import carretUp from './carret-up.svg';

const Select = styled.select`
  padding: 0.5em 1.5em 0.5em 0.5em;
  box-sizing: border-box;
  font-size: 1em;
  line-height: 1.3em;
  outline: none;
  appearance: none;
  border-radius: ${props => props.theme.main.radius};
  color: ${props => props.theme.main.color};
  border: 1px solid ${props => props.theme.main.grayMedium};
  background-color: ${props => props.theme.main.background};
  background-image: url(${carretDown});
  background-repeat: no-repeat;
  background-position: right 0.5em center;
  background-size: 0.75em auto;

  &::focus {
    background-image: url(${carretUp});
  }

  &::-ms-expand {
    display: none;
  }

  ${props => props.compact && css`
    padding: 0.2em 1.5em 0.2em 0.5em;
  `}

  ${props => props.full && css`
    width: 100%;
  `}
`

export default Select