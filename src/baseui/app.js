import React from 'react';

import { Client as Styletron } from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import { LightTheme, ThemeProvider } from 'baseui';

import {Button} from 'baseui/button'

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <ThemeProvider theme={LightTheme}>
        <Button>Hello world</Button>
      </ThemeProvider>
    </StyletronProvider>
  );
}

export default App;
