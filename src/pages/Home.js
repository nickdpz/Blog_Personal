import React, { Component } from 'react';
import './styles/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import api from '../utils/api'

class Home extends Component {
    state = {
        post: {},
        loading:false,
    }
    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
            const data = await api.getPost();
            console.log(data);
            if (data.length !== 0) {
                this.setState({ loading: false, post: data.message })
            } else {
                this.setState({ loading: false, error: 'No hay Post' });
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
                <h1>Hola Estamos encantados de tenerte</h1>
                <Link to='/post'>
                    Crea Un Nuevo Post
                </Link>
                <Footer />
            </>
        );
    }

};

export default Home;