import styled, { css } from 'styled-components';
import { Input, InputWrapper } from '../input';
import Label from '../label';
import Button from '../button';

const FormGroup = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;

  & > ${Input},
  & > ${InputWrapper},
  & > ${Button},
  & > ${Label} {
    flex: 1 1 auto;
  }

   ${props => props.full && css`
     width: 100%;
  `}

  ${props => !props.space && css`
    & > ${Input},
    & > ${InputWrapper} > ${Input},
    & > ${Button},
    & > ${Label} {
      border-radius: 0px;
      margin-left: -1px;
    }

    & > ${Input}:last-child,
    & > ${Label}:last-child,
    & > ${InputWrapper}:last-child > ${Input},
    & > ${Button}:last-child {
      border-top-right-radius: ${props => props.theme.main.radius};
      border-bottom-right-radius: ${props => props.theme.main.radius};
    }

    & > ${Input}:first-child,
    & > ${Label}:first-child,
    & > ${InputWrapper}:first-child > ${Input},
    & > ${Button}:first-child {
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