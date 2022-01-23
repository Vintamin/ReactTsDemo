import React, {Component} from "react";
import {Button} from "antd";
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {doLogin} from "../store/actions/AdminAction";
import MyHeader from "./MyHeader";

class Login extends Component<any, any> {
    login = () => {
        this.props.login({name: "最爱白菜吖"})
    }

    render() {
        return (
            <>
                <MyHeader/>
                <Button type='primary' onClick={this.login}>login</Button>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    login: (data: any) => {
        doLogin(dispatch, data)
    }
})
export default connect(null, mapDispatchToProps)(Login)
