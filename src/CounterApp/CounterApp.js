import React, { Component } from 'react'
import CounterDisplay from './CounterDisplay';
import DecreaseButton from './DecreaseButton';
import IncreaseButton from './IncreaseButton';
import ResetButton from './ResetButton';

export default class CounterApp extends Component {
    constructor(props){
        super(props)

        // Inisialisasi nilai count di dalam state
        this.state = {
            count : 0
        };

        // binding event handler
        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
        this.onDecreaseEventHandler = this.onDecreaseEventHandler.bind(this);
        this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }

    
    onIncreaseEventHandler(){
        this.setState((previousState) => {
            return {
                count : previousState.count + 1
            };
        });
    }

    onDecreaseEventHandler(){
        this.setState((previousState) => {
            return {
                count : previousState.count - 1
            };
        });
    }

    onResetEventHandler(){
        this.setState(() => {
            return {
                count : 0
            };
        })
    }

    

  render() {
    return (
      <div className='counter-app'>
        <div className='counter-app-wrapper'>
            <DecreaseButton decrease={this.onDecreaseEventHandler}/>
            <CounterDisplay count={this.state.count} />
            <IncreaseButton increase={this.onIncreaseEventHandler}/>
        </div>
        <ResetButton reset={this.onResetEventHandler} />
      </div>
    )
  }
}
