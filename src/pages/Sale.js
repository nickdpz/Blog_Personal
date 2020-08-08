import React from 'react';

import './styles/SalesDate.css';
import PageLoading from '../components/PageLoading';
import SalesList from '../components/SalesList';
import PageError from '../components/PageError';
import api from '../api';

class Sale extends React.Component {
  state = {
    loading: true,
    error: null,
    date: null,
    data: [],
    form: {
      date: ''
    },
  };

  componentWillMount() {
    let now = new Date();
    let month = now.getMonth() < 10 ? `0${now.getMonth()}` : `${now.getMonth()}`;
    let day = now.getDate() < 10 ? `0${now.getDate()}` : `${now.getDate()}`;
    this.setState({ form: { date: `${now.getFullYear()}-${month}-${day}` } })
  }
  componentDidMount() {
    this.fetchData();
  }

  handleClick = (event) => {
    event.preventDefault();
    this.fetchData();
  }

  _handleChange = (e) => {
    this.setState({ form: { date: e.target.value } })
  };

  fetchData = async () => {
    let dataFilter = []
    this.setState({ loading: true, error: null });
    try {
      const data = await api.data.getDate(this.state.form.date);
      if(data.message!=="error"){
        dataFilter=data.filter((event)=>{
          return (event.compro)
        })
        this.setState({ loading: false, data: dataFilter });
      }else{
        this.setState({ loading: false, error: "error" });
      }
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row my-4">
            <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
            <h2 className="my-4 Sales_container-center">Consulta las Ventas</h2>
              <form className="Sales_container-center" onSubmit={this.handleSubmit}>
                  <input className="" type="date" id="start"
                    onChange={this._handleChange}
                    value={this.state.form.date}
                  ></input>
                <button onClick={this.handleClick} className="btn btn-primary">Consultar </button>
              </form>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-8 offset-lg-2">
              <SalesList sales={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SalesDate;