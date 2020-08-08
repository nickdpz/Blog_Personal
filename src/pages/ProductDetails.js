import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles/Product.css';
import { addProductCar, removeProductCar } from '../actions';
import api from '../api'

class ProductDetails extends Component {
    state = {
        count: 0,
        loading: false,
        error: false,
        product: {}
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
            const data = await api.getProduct(this.props.match.params.productId);
            if (data.length !== 0) {
                this.setState({ loading: false });
            } else {
                this.setState({ loading: false, error: 'NO Existe el Producto' });
            }
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };
    getProduct = () => {
        const product = this.props.products.filter((product) => (product.id == this.props.match.params.productId));
        this.setState({ product: product[0] })
    }
    handleRemove = e => {
        const { id, price } = this.state.product;
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
            this.props.removeProductCar({ id, price });
        }
    };
    handleAdd = e => {
        const { id, name, price } = this.state.product;
        this.setState({ count: this.state.count + 1 });
        this.props.addProductCar({ id, name, price });
    };
    componentDidMount() {
        this.getProduct();
    }
    render() {
        const { id, cover, name, shortDescription, price } = this.state.product;
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-8 p-2">
                        <img src={cover} alt={id} width="500" />
                    </div>
                    <div className="col-4 align-content-center">
                        <h1>{name}</h1>
                        <div className="Product__section-info">
                            <h3>{price}</h3>
                            <p>{shortDescription}</p>
                        </div>
                        <button onClick={this.handleAdd} className="btn btn-primary">+</button>
                        <p>{this.state.count}</p>
                        <button onClick={this.handleRemove} className="btn btn-primary">-</button>
                        <br/>
                        <br/>
                        <br/>
                        <Link to={'/buy'} className="btn btn-primary">
                            <p className=''>Pagar</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addProductCar,
    removeProductCar
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
