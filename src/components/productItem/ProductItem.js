import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm('Bạn muốn xóa sản phẩm này ?')) {//eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        var { product, index } = this.props;
        var status_name = product.status ? 'ON' : 'OFF';
        var status_class = product.status ? 'success' : 'danger'
        return (
            <tr>
                <td >{index}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <label className={`label label-${status_class}`}>{status_name}</label>
                </td>
                <td>
                    <Link to={`products/${product.id}`} className="btn btn-outline-info ml-10 btn-sm" >edit</Link>
                    <button type="button" className="btn btn-outline-danger ml-10 btn-sm" onClick={() => this.onDelete(product.id)} >delete</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
