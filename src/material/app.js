import React from 'react';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <React.Fragment>
      <Button variant="contained">
        Default
      </Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="secondary" disabled>
        Disabled
      </Button>
    </React.Fragment>
  );
}

export default App;
