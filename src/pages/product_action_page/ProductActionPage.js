import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';
import { toast } from 'react-toastify';

class ProductActionPage extends Component {
    check_edit = false;
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            price: "",
            status: ""
        }
    }
    componentDidMount() {
        var match = this.props.match;
        if (match) var id = match.params.id;
        if (id) {
            callApi(`products/${id}`, 'GET', null).then((res) => {
                if (res) {
                    this.setState({
                        id: res.data.id,
                        name: res.data.name,
                        price: res.data.price,
                        status: res.data.status,
                    })
                }
            })
            return this.check_edit = true;
        }
        return this.check_edit = false;
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        var { history } = this.props;
        var respond;
        if (this.check_edit) {
            respond = await callApi(`products/${this.state.id}`, 'PUT', this.state);
            (respond.status === 200) ? toast.success("Cập nhật thành công.!") : toast.error("Cập nhật thất bại.!");
            return history.goBack();
        }
        respond = await callApi('products', 'POST', this.state);
        (respond.status === 201) ? toast.success("Thêm mới thành công.!") : toast.error("Thêm mới thất bại.!");
        return history.goBack();
    }

    render() {
        var { id, name, price, status } = this.state;
        return (
            <div className="container">
                <br></br>
                <form className="needs-validation" onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label >Mã</label>
                        <input className="form-control"
                            type="number"
                            name="id"
                            value={id}
                            onChange={this.onChange} />
                    </div>
                    <div className="mb-3">
                        <label >Tên</label>
                        <input type="text" className="form-control"
                            name="name"
                            value={name}
                            onChange={this.onChange} />
                    </div>
                    <div className="mb-3">
                        <label >Giá</label>
                        <input type="number" className="form-control"
                            name="price"
                            value={price}
                            onChange={this.onChange} />

                    </div>
                    <h4 className="mb-3">Trạng thái</h4>
                    <div className="d-block my-3">
                        <div className="custom-control custom-radio">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" name="status" value={status} onChange={this.onChange} checked={status} />
                                    on / off
                             </label>
                            </div>
                        </div>
                    </div>
                    <hr className="mb-4" />
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                </form>

            </div>

        );
    }
}

export default ProductActionPage;
