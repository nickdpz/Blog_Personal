import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ProductItem.css';
import { addProductCar } from '../actions';
import { connect } from 'react-redux';

const ProductItem = (props) => {
    const { id, cover, name, shortDescription, price } = props;

    const handleClick = e => {
        console.log(props.addProductCar);
        props.addProductCar({ id, name, price });
    };
    return (
        <div className='product-item'>
            <img className='product-item__img' src={cover} alt={name} />
            <div className='product-item__details'>
                <Link to={`/product/${id}`}>
                    <p className='product-item__details--name'>{name}</p>
                </Link>
                <h3>{price}</h3>
                <p className='product-item__details--short'>
                    {shortDescription}
                </p>
                <button onClick={handleClick} className="btn btn-primary">
                    Add To Car
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    addProductCar,
};

export default connect(null, mapDispatchToProps)(ProductItem);
