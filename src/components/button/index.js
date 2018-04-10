import styled, { css } from 'styled-components';
import Icon from '../icon'

const Button = styled.a`
  display: inline-block;
  padding: 0.5em 0.8em;
  font-size: 1em;
  line-height: 1.3em;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;

  &:hover {
   background: ${props => props.theme.main.activeColor};
  }

  border-radius: ${props => props.theme.main.radius};
  background: ${props => props.theme.main.background};
  color: ${props => props.theme.main.color};
  border: 1px solid ${props => props.theme.main.color};

  ${props => props.primary && css`
    background: ${props => props.theme.primary.background};
    color: ${props => props.theme.primary.color};
    border: 1px solid ${props => props.theme.primary.background};

    &:hover {
      background: ${props => props.theme.main.activeColor};
    }
  `}

  ${props => props.compact && css`
    padding: 0.2em 0.5em;
  `}

  ${props => !props.full && css`
    & > ${Icon} + span, & > span + ${Icon} {
      margin-left: 1em;
    }
  `}

  ${props => props.full && css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    text-align: center;
    & > * {
      flex: 0 1 auto;
      text-align: center;
      margin: 0;
    }
    & > span {
      margin: 0 auto;
    }
  `}
`



export default Button