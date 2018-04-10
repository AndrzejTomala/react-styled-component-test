import styled, { css } from 'styled-components';

const Size = styled.h1`
  font-size: 1rem;

  ${props => props.mini && css`
    font-size: 0.5rem;
  `}

  ${props => props.small && css`
    font-size: 0.75rem;
  `}

  ${props => props.big && css`
    font-size: 1.5rem;
  `}

  ${props => props.large && css`
    font-size: 2rem;
  `}
`

export default Size