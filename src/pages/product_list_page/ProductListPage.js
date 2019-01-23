import React, { Component } from 'react';
import ProductList from '../../components/productList/ProductList';
import ProductItem from '../../components/productItem/ProductItem';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        callApi('users', 'GET', null).then(res => {
            this.setState({
                products: res.data
            })
        })
    }

    onDelete = (id) => {
        var products = this.state.products;
        callApi(`users/${id}`, 'DELETE', null).then((res) => {
            if (res.status === 200) {
                var index = products.indexOf(products.find(x => x.id === id));
                products.splice(index, 1);
                this.setState({
                    products: products
                })
            }
        })
    }

    render() {

        var { products } = this.state;
        return (
            <main role="main" className="container">

                <div className="my-3 p-3 bg-white rounded shadow-sm">
                    <h6 className="border-bottom border-gray pb-2 mb-0">Recent updates</h6>
                    <ProductList>
                        {this.showProduct(products)}
                    </ProductList>
                    <small className="d-block text-right mt-3">
                        <Link to="products/add">Thêm mới</Link>
                    </small>
                </div>
            </main>
        );
    }
    showProduct(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((produc, index) => {
                return (<ProductItem key={index} product={produc} index={index} onDelete={this.onDelete} />)
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

export default connect(mapStateToProps, null)(ProductListPage);
