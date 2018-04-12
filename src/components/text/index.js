import styled, { css } from 'styled-components';

const Text = styled.p`
  background: ${props => props.theme.main.background};
  color: ${props => props.theme.main.color};
  padding: 1em 1em;
  font-size: 1em;
  margin: 0;
  box-sizing: border-box;

  ${props => props.primary && css`
    background: ${props => props.theme.primary.background};
    color: ${props => props.theme.primary.color};
  `}

  ${props => props.light && css`
    background: ${props => props.theme.main.grayLight};
  `}

  ${props => props.compact && css`
    padding: 1em 0;
  `}
`

export default Text