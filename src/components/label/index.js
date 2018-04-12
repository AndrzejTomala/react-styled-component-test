import styled, { css } from 'styled-components';

const Label = styled.div`
  display: inline-block;
  padding: 0.5em 0.8em;
  font-size: 1em;
  line-height: 1.3em;
  text-align: center;
  box-sizing: border-box;
  position: relative;

  border-radius: ${props => props.theme.main.radius};
  background: ${props => props.theme.main.grayLight};
  color: ${props => props.theme.main.grayDark};
  border: 1px solid ${props => props.theme.main.grayMedium};

  ${props => props.primary && css`
    background: ${props => props.theme.primary.background};
    color: ${props => props.theme.primary.color};
    border: 1px solid ${props => props.theme.primary.background};
  `}

  ${props => props.error && css`
    background: ${props => props.theme.main.errorBackground};
    color: ${props => props.theme.main.errorColor};
    border: 1px solid ${props => props.theme.main.errorBackground};
  `}

  ${props => props.compact && css`
    padding: 0.2em 0.5em;
  `}

  ${props => props.arrowTop && css`
    margin-top: 0.5em;

    &::before {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 100%;
      transform: translate(-50%, 0%);
      border-bottom: 0.6em solid ${props => props.theme.main.grayMedium};
      border-left: 0.6em solid transparent;
      border-right: 0.6em solid transparent;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 100%;
      transform: translate(-50%, 0%);
      border-bottom: 0.5em solid ${props => props.theme.main.grayLight};
      border-left: 0.5em solid transparent;
      border-right: 0.5em solid transparent;
    }
  `}

  ${props => props.arrowTop && props.error && css`
    &::before, &::after {
      border-bottom: 0.6em solid ${props => props.theme.main.errorBackground};
    }
  `}

  ${props => !props.full && css`
    & > * + span, & > span + * {
      margin-left: 1em;
    }
  `}

  ${props => props.full && css`
    width: 100%;
    right: 0;
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

export default Label