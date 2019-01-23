import React, { Component } from 'react';
class ProductList extends Component {
    render() {
        return (
            <div>
                <table className="table table-striped table-inverse ">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Mã</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Trạng thái</th>
                            <th>Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductList;
