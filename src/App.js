import React, { Component } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { Theme } from './theme/basic'
import Button from './components/button'
import Icon from './components/icon'
import { Flex, Box } from 'grid-styled'

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={Theme}>
          <Flex>
            <Box width={1/2} px={2}>
              <Button>
                <Icon name='rocket' /> Normal button from the theme
              </Button>
            </Box>
            <Box width={1/2} px={2}>
              <Button primary>
                <Icon name='rocket' /> Primary button from the theme
              </Button>
            </Box>
          </Flex>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
