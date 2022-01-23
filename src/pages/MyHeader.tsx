import React, {Component} from "react";
import {IAdminState} from "../store/states/AdminState";
import {connect} from "react-redux";

class MyHeader extends Component<any, any> {
    render() {
        if (this.props.admin.name === '') {
            return null
        }
        return (
            <>
                我是：{this.props.admin.name}
                <hr/>
            </>
        );
    }
}

const mapStateToProps = (state: IAdminState) => {
    return {
        ...state
    };
}
export default connect(mapStateToProps)(MyHeader)
