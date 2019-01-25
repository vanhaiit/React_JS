import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import callApi from '../../utils/apiCaller';
import UserList from '../../components/userList/UserList';
import UserItem from '../../components/userItem/UserItem';

class UserListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        callApi('users', 'GET', null).then(res => {
            this.setState({
                users: res.data
            })
        })
    }

    onDelete = (id) => {
        var { users } = this.state;
        callApi(`users/${id}`, 'DELETE', null).then((res) => {
            if (res.status === 200) {
                var index = users.indexOf(users.find(x => x.id === id));
                users.splice(index, 1);
                this.setState({
                    users: users
                })
            }
        })
    }

    render() {

        var { users } = this.state;
        return (
            <div>
                <UserList>
                    {this.showUser(users)}
                </UserList>
                <Link className="btn btn-primary pull-right" to="user/add">Thêm mới</Link>
            </div>
        );
    }
    showUser(users) {
        var result = null;
        if (users.length > 0) {
            result = users.map((user, index) => {
                return (<UserItem key={index} user={user} index={index} onDelete={this.onDelete} />)
            });
            return result;
        }
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(UserListPage);
