import React, { Component } from 'react';
import ProductList from '../../components/productList/ProductList';
import ProductItem from '../../components/productItem/ProductItem';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';
import { actFetchProductsRequest } from '../../actions';

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        this.props.fetchAllProducts();
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

        var { products } = this.props;
        return (
            <div>
                <ProductList>
                    {this.showProduct(products)}
                </ProductList>
                <Link className="btn btn-primary pull-right" to="products/add">Thêm mới</Link>
            </div>
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

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
