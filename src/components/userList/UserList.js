import React, { Component } from 'react';
class UserList extends Component {
    render() {

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header card-header-primary">
                            <h4 className="card-title ">Simple Table</h4>
                            <p className="card-category"> Here is a subtitle for this table</p>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className=" text-primary">
                                        <tr>
                                            <th>STT</th>
                                            <th>Mã</th>
                                            <th>Tên</th>
                                            <th>Ngày sinh</th>
                                            <th>Ghi chú</th>
                                            <th style={{ width: "17%" }}>Tùy chọn</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.children}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserList;
