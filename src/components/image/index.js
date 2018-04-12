import styled, { css } from 'styled-components';

const Image = styled.img`
  vertical-align: middle;

  ${props => props.round && css`
    border-radius: ${props => props.theme.main.radius};
  `}

  ${props => props.circle && css`
    border-radius: 100%;
  `}

  ${props => props.fluid && css`
    width: 100%;
  `}

  ${props => props.small && css`
    height: 2em;
  `}

  ${props => props.medium && css`
    height: 4em;
  `}

  ${props => props.big && css`
    height: 8em;
  `}

  ${props => props.large && css`
    height: 16em;
  `}
`

export default Image