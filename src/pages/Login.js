import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import '../styles/Login.css';

const Login = (props) => {
    const [form, setValues] = useState({
        email: '',
        password: '',
    });

    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.loginUser(form, '/');
    };

    return (
        <>
            <section className='login'>
                <section className='login__container'>
                    <h2>Inicia sesión</h2>
                    <form className='login__container--form' onSubmit={handleSubmit}>
                        <input
                            name='email'
                            className='input'
                            type='text'
                            placeholder='Correo'
                            onChange={handleInput}
                        />
                        <input
                            name='password'
                            className='input'
                            type='password'
                            placeholder='Contraseña'
                            onChange={handleInput}
                        />
                        <button className='button' type='submit'>Iniciar sesión</button>
                    </form>
                </section>
            </section>
        </>
    );
};

const mapDispatchToProps = {
    loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
