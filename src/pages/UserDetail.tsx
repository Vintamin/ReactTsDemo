import React, {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router";

interface IProps extends RouteComponentProps {
}

class UserDetail extends Component<IProps, any> {
    id: any

    constructor(props: IProps, context: any) {
        super(props, context);
        //@ts-ignore
        this.id = this.props.match.params.id
    }

    render() {
        return (
            <>
                user detail {this.id}
            </>
        );
    }
}

export default withRouter(UserDetail)
