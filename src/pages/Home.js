import React, { Component } from 'react';
import './styles/Home.css';
import Header from '../components/Header';
import Footer from '../components/Filter'
import api from '../api'

class Home extends Component {
    state = {
        count: 0,
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
    }

    render() {
        return (
            <>
                <Header />
                <h1>Hola</h1>
            </>
        );
    }

};

export default Home;