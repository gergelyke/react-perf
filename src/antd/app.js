import React from 'react';
import { Button } from 'antd';
import "antd/dist/antd.css";

function App() {
  return (
    <React.Fragment>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
    </React.Fragment>
  );
}

export default App;
