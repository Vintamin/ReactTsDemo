import React, {Component} from "react";
import {Button, message, Popconfirm} from "antd";

interface IProps {
    id: number
    callback: (id: number) => void
}

export default class DeleteUser extends Component<IProps, any> {
    deleteUser = () => {
        // 网络请求 删除 成功
        this.props.callback(this.props.id)

        // 失败
        // message.warning('删除失败')
    }
    confirm = () => {
        this.deleteUser()
    }
    cancel = () => {
        message.warn('取消删除')
    }

    render() {
        return (
            <>
                <Popconfirm
                    title="Are you sure to delete this task?"
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type='primary' danger>删除</Button>
                </Popconfirm>
            </>
        )
    }
}
