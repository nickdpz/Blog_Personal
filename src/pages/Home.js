import React, { Component } from 'react';
import './styles/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import api from '../utils/api'
import { connect } from 'react-redux';

class ListPosts extends React.Component {
    render() {
        return (
            <div className="list-group list-group-horizontal">
                <span className="list-group-item list-item-title">{this.props.post.title}</span>
                <span className="list-group-item list-item-description">{this.props.post.shortDescription}</span>
            </div>
        );
    }
}

function Posts(props) {
    const posts = props.post;
    let count = 1;
    if (posts.length === 0) {
        return (
            <>
                <h3>No has posteado Nada</h3>
            </>
        );
    }
    return (
        <div className="SalesList">
            <ul className="list-unstyled">
                <li key='0'>
                    <div className="list-group list-group-horizontal">
                        <span className="list-group-item list-item-title"><strong>Titulo</strong></span>
                        <span className="list-group-item list-item-description"><strong>Descripcion</strong></span>
                    </div>
                </li>
                {posts.map(post => {
                    return (
                        <li key={count++}>
                            <ListPosts post={post} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}



class Home extends Component {

    getCookie = (cname) => {
        const name = `${cname}=`;
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    };

    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
            const userId = this.getCookie('id');
            const token = this.getCookie('token');
            const data = await api.getPost(userId, token);
            this.setState({ post: data });
        } catch (error) {
            this.setState({ post: [] });
        }
    };

    componentDidMount() {
        //this.fetchData();
    }

    render() {
        return (
            <>
                <Header />
                <div className="container mt-5">
                    <h1>Hola {this.props.user.name}<br />
                    Estamos encantados de tenerte</h1>
                    <Link to='/post'>
                        Crea Un Nuevo Post
                </Link>
                    <Posts post={this.props.post} />
                </div>
                <Footer />
            </>
        );
    }

};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        post: state.post
    };
};

export default connect(mapStateToProps, null)(Home);