import React, { Component } from 'react';

export class CodeSplitComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    }
  }

  render () {
    if (this.state.error) {
      throw Error('Error intentionally thrown')
    }

    return (
      <div className="App">
        <p>
          This component was loaded in a separate bundle
        </p>
        <button onClick={() => this.setState({error: true})}>Throw error</button>
      </div>
    );
  }
}
