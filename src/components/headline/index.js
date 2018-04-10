import styled, { css } from 'styled-components';

const Headline = styled.h1`
  background: ${props => props.theme.main.background};
  color: ${props => props.theme.main.color};
  border-bottom: 1px solid ${props => props.theme.main.color};
  padding: 0.5em;
  font-size: 1.5em;
  margin: 0;
  box-sizing: border-box;

  ${props => props.primary && css`
    background: ${props => props.theme.primary.background};
    color: ${props => props.theme.primary.color};
    border-bottom: 1px solid ${props => props.theme.primary.color};
  `}
`

export default Headline