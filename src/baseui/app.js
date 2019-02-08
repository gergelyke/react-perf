import React from 'react';

import { Client as Styletron } from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import { LightTheme, ThemeProvider } from 'baseui';

import {Button, KIND} from 'baseui/button'

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <ThemeProvider theme={LightTheme}>
        <Button>Primary</Button>
        <Button kind={KIND.secondary}>Secondary</Button>
        <Button kind={KIND.tertiary}>Tertiary</Button>
        <Button kind={KIND.minimal}>Minimal</Button>
      </ThemeProvider>
    </StyletronProvider>
  );
}

export default App;
