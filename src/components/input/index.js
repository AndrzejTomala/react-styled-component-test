import styled, { css } from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  box-sizing: border-box;
  font-size: 1em;
  line-height: 1.3em;
  outline: none;

  border-radius: ${props => props.theme.main.radius};

  border: 1px solid ${props => props.theme.main.grayMedium};
  background: ${props => props.theme.main.background};
  color: ${props => props.theme.main.color};

  ${props => props.compact && css`
    padding: 0.2em 0.5rem;
  `}

  ${props => props.full && css`
    width: 100%;
  `}
`

export default Input