import styled, { css } from 'styled-components';
import Input from '../input';
import Button from '../button';

const FormGroup = styled.div`
  box-sizing: border-box;
  display: flex;

  & > ${Input}, & > ${Button} {
    flex: 1 1 auto;
  }

  ${props => !props.space && css`

    & > ${Input}, & > ${Button} {
      border-radius: 0px;
      margin-left: -1px;
    }
    & > *:last-child {
      border-top-right-radius: ${props => props.theme.main.radius};
      border-bottom-right-radius: ${props => props.theme.main.radius};
    }
    & > *:hover {
      z-index: 1;
    }
    & > *:first-child {
      margin-left: 0;
      border-top-left-radius: ${props => props.theme.main.radius};
      border-bottom-left-radius: ${props => props.theme.main.radius};
    }
  `}

   ${props => props.space && css`
    & > * {
      margin-right: 0.5em;
    }
    & > *:last-child {
      margin-right: 0;
    }
  `}
`

export default FormGroup