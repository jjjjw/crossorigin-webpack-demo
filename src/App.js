import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null
    state = { Component: AsyncComponent.Component }

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }
    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return <div>Loading...</div>
    }
  }
}

const CodeSplitComponent = asyncComponent(() =>
  import('./CodeSplitComponent').then(module => module.CodeSplitComponent)
)

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Demonstrates a cross origin error thrown in a separate bundle
        </p>
        <p>
          {this.state.error && `Error: ${this.state.error.message}`}
        </p>
        <CodeSplitComponent />
      </div>
    );
  }

  componentDidCatch (error, info) {
    this.setState({
      error,
      info
    })
  }
}

export default App;
