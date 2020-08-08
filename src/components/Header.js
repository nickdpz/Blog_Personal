import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { product } = props;
  return (
    <header className="">
    <Link to={'/buy'} className="btn">
      <p className=''>carro</p>
    </Link>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

export default connect(mapStateToProps, null)(Header);
