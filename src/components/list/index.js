import styled, { css } from 'styled-components';

import dotSVG from './dot.svg'
import folderSVG from './folder.svg'
import arrowSVG from './angle.svg'


export const ListItem = styled.li`
  display: block;
  margin: 0;
  padding: 0.5em 0 0.5em;

  ${props => !props.parent && css`
    &:hover {
      background: #ccc;
    }
  `}
  ${props => props.parent && css`
    &:before {
      display: none !important;
    }
  `}
`

export const List = styled.ul`
  color: ${props => props.theme.main.color};
  padding: 0.5em;
  font-size: 1em;
  margin: 0;
  box-sizing: border-box;

  & > ${ListItem} > & {
    margin-left: 0.5em;
    padding: 0 0 0 0;
    margin-top: -0.5em;
    margin-bottom: -0.5em;
  }

  ${props => props.compact && css`
    padding: 0.2em 0;
    & > ${ListItem} {
      padding: 0.1em 0;
    }
    & > ${ListItem} > & {
      margin-top: -0.1em;
      margin-bottom: -0.1em;
    }
  `}

  ${props => props.arrow && css`
    & > ${ListItem} {
      &:before {
        content: "";
        display: inline-block;
        width: 1em;
        height: 1em;
        background-image: url(${arrowSVG});
        background-repeat: no-repeat;
        background-position: top left;
        background-size: 0.6em auto;
        vertical-align: baseline;
      }
    }
  `}

  ${props => props.folder && css`
    & > ${ListItem} {
      &:before {
        content: "";
        display: inline-block;
        width: 1em;
        height: 1em;
        background-image: url(${folderSVG});
        background-repeat: no-repeat;
        background-position: top left;
        background-size: 0.75em auto;
        vertical-align: middle;
      }
    }
  `}

  ${props => props.dot && css`
    & > ${ListItem} {
      &:before {
        content: "";
        display: inline-block;
        width: 1em;
        height: 0.7em;
        background-image: url(${dotSVG});
        background-repeat: no-repeat;
        background-position: top 1px left;
        background-size: 0.5em auto;
        vertical-align: baseline;
      }
    }
  `}
`

export default {
  List,
  ListItem
}