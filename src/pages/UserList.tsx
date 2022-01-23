import React, {Component} from "react";
import {Button, Space, Table} from "antd";
import DeleteUser from "../DeleteUser";

interface IUser {
    id: number
    name: string
}

interface IState {
    userList: IUser[]
}

export default class UserList extends Component<any, IState> {

    constructor(props: any, context: any) {
        super(props, context);
        let userList: IUser[] = []
        for (let i = 1; i < 20; i++) {
            userList.push({
                id: i,
                name: 'user ' + i
            })
        }
        this.state = {
            userList: userList
        }
    }

    deleteUser = (id: number) => {
        this.setState({
            userList: this.state.userList.filter(user => user.id !== id)
        })
    }

    render() {
        return (
            <>
                <Table
                    dataSource={this.state.userList}
                    rowKey='id'
                >
                    <Table.Column
                        title={"ID"}
                        dataIndex='id'/>
                    <Table.Column
                        title={'用户名'}
                        dataIndex={'name'}/>
                    <Table.Column
                        title={'管理'}
                        render={(user: IUser) => (
                            <Space>
                                <Button type='primary'>编辑</Button>
                                <DeleteUser id={user.id} callback={this.deleteUser}/>
                            </Space>
                        )}/>
                </Table>
            </>
        )
    }

}
