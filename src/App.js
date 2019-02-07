import React, { Component } from 'react';

import Material from './material/app';
import Antd from './antd/app';
import Base from './baseui/app';

const apps = {
  material: Material,
  antd: Antd,
  baseui: Base
};

class App extends Component {
  state = {
    app: null
  }

  componentWillMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const app = urlParams.get('app');

    this.setState({ app })

    performance.mark('render');
  }

  componentDidMount() {
    console.log(performance.now('render'));
  }

  render() {
    const AppToRender = apps[this.state.app];
    return (
      <React.Fragment>
        <AppToRender />
      </React.Fragment>
    );
  }
}

export default App;
