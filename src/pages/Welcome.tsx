import React, {Component} from "react";
import {Button} from "antd";

interface IState {
    counter: number
}

export default class Welcome extends Component<any, IState> {

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            counter: 0
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps = (props: any, state: IState) => {
        console.log("getDerivedStateFromProps", state.counter)
        return null
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<IState>, nextContext: any): boolean {
        console.log("shouldComponentUpdate", nextState.counter)
        return nextState.counter <= 5;
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<IState>, snapshot?: any) {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    add = () => {
        this.setState((state, props) => ({
            counter: state.counter + 1
        }))
    }

    render() {
        console.log("render")
        return (
            <>
                <h1>
                    {this.state.counter}
                </h1>
                <Button type='primary' onClick={this.add}>Add</Button>
            </>
        )
    }
}
