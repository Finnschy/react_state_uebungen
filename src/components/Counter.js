import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        count: 0
     }
     handleIncrement = () => {
         this.setState({count: this.state.count + 1});
     }
     handleDecrement = () => {
         this.setState({count: this.state.count - 1});
     }
     handleReset = () => {
         this.setState({ count: 0});
     }
    render() { 
        return ( 
            <section id="counterSection">
                <div id="counterFlex">
                    <button className="counterButton" onClick={this.handleDecrement}>-</button>
                    <p id="counterResult">{this.state.count}</p>
                    <button className="counterButton" onClick={this.handleIncrement}>+</button>
                </div>

                <button onClick={this.handleReset} id="resetButton">Reset</button>
            </section>
         );
    }
}
 
export default Counter;
