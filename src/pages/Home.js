import React, { Component } from 'react';
import './styles/Home.css';
import { connect } from 'react-redux';
import ProductContainer from '../components/ProductContainer';
import ProductItem from '../components/ProductItem';
import Header from '../components/Header';
import Filter from '../components/Filter'
import Footer from '../components/Filter'
import api from '../api'

class Home extends Component {
    state = {
        count: 0,
        loading: false,
        error: false,
        products: {}
    }
    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
            const data = await api.getProducts(this.props.match.params.productId);
            console.log(data);
            if (data.length !== 0) {
                this.setState({ loading: false, products: data.message })
            } else {
                this.setState({ loading: false, error: 'NO Existe el Producto' });
            }
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const { products } = this.state;
        //const { products } = this.props;
        return (
            <>
                <Header />
                <div className="container-body">
                    <Filter />
                    <ProductContainer>
                        {products.length > 0 && (
                            <>
                                {products.map((item) => (
                                    <ProductItem
                                        key={item._id}
                                        {...item}
                                        isList
                                    />
                                ))}
                            </>
                        )}
                    </ProductContainer>
                </div>
                <Footer />
            </>
        );
    }

};

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};
export default connect(mapStateToProps, null)(Home);