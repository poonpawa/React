import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.addToCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.subtractToCounter} />
            </div>
        );
    }
}
/* to store how the state managed by redux should be mapped in this component,
also define props which can be intern used in this component 
It takes the input of redux state &
returns an object with the props we wish to use in the component
*/
const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}
//used to dispatch actions from the container
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        addToCounter: () => dispatch({ type: 'ADD', value: 5 }),
        subtractToCounter: () => dispatch({ type: 'SUBTRACT', value: 5 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);