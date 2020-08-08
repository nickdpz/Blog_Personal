import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="">
    <Link to={'/post'} className="btn">
      <p className=''>carro</p>
    </Link>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
