import React, { Component } from 'react'

export default class Basic extends Component {
    constructor(props){
        super(props);

        this.state = {
            count : 0
        }

        // Correct!
        // Like function parameter
        // this.setState((previousState) => {
        //     return {
        //         count: previousState.count + 1,
        //     }
        // });

        // Like Object Parameter
        // this.setState({
        //     count: 0
        // });

        // Don't!
        // this.state.count = this.state.count + 1;
    }

  render() {

    return (
      <div>
        <p>{this.state.count}</p>
      </div>
    )
  }
}
