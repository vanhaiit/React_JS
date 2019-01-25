import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class UserItem extends Component {

    onDelete = (id) => {
        if (confirm('Bạn muốn xóa sản phẩm này ?')) {//eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        var { user, index } = this.props;
        return (
            <tr>
                <td >{index}</td>
                <td>{user.user_id}</td>
                <td>{user.name}</td>
                <td>{user.birthday}</td>
                <td>{user.description}</td>
                <td>
                    <Link to={`user/${user.user_id}`} className="btn btn-outline-info ml-10 btn-sm" >edit</Link>
                    <button type="button" className="btn btn-outline-danger ml-10 btn-sm" onClick={() => this.onDelete(user.user_id)} >delete</button>
                </td>
            </tr>
        );
    }
}

export default UserItem;
