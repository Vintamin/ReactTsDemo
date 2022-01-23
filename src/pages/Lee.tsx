import React, {Component} from "react";
import {Button} from "antd";

interface IState {
    counter: number
}

export default class Lee extends Component<any, IState> {

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            counter: 0
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps(props: any, state: IState) {
        console.log("getDerivedStateFromProps", state.counter)
        return {counter: 0}
        // return null
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<IState>, nextContext: any): boolean {
        return nextState.counter <= 1
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    add = () => {
        this.setState((state) => ({
            counter: state.counter + 1
        }))
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<IState>, snapshot?: any) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
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
