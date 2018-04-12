import React from 'react'
import styled, { css } from 'styled-components'

export const Textarea = styled.textarea`
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

  ${props => props.disabled && css`
    opacity: ${props => props.theme.main.disabledOpacity};
    cursor: not-allowed;
  `}
`

export const TextareaWrapper = styled.div`
  position: relative;

  & > label {
    display: block;
    font-size: 0.8em;
    padding-top: 0.5em;
    line-height: 1.5em;
    padding-left: 0.6em;
    border-left: 1px solid transparent;
  }

  & > .message {
    position: absolute;
    font-size: 0.6em;
    top: 100%;
    right: 0;
    left: 0;
  }

  & > ${Textarea} {
    width: 100%;
    margin: 0;
    height: 100%;
  }

  ${props => props.full && css`
    width: 100%;
  `}

  ${props => props.float && css`
    & > label {
      position: absolute;
      font-size: 0.6em;
      line-height: 1em;
      padding-left: 0.9em;
    }

    & > ${Textarea} {
      padding: 0.8em 0.5em 0.2em 0.5em;
    }
  `}
`

export default {
  Textarea,
  TextareaWrapper
}