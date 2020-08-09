import React, { Component } from 'react';
import './styles/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import api from '../utils/api'

class ListPosts extends React.Component {
    render() {
        return (
            <div className="list-group list-group-horizontal">
                <span className="list-group-item SalesListItem">{this.props.post.title}</span>
                <span className="list-group-item SalesListItem">{this.props.post.shortDescription}</span>
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
                        <span className="list-group-item SalesListItem"><strong>Titulo</strong></span>
                        <span className="list-group-item SalesListItem"><strong>Descripcion</strong></span>
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
    state = {
        post: [{}],
    }

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
        this.fetchData();
    }

    render() {
        return (
            <>
                <Header />
                <h1>Hola Estamos encantados de tenerte</h1>
                <Link to='/post'>
                    Crea Un Nuevo Post
                </Link>
                <Posts post={this.state.post} />
                <Footer />
            </>
        );
    }

};

export default Home;