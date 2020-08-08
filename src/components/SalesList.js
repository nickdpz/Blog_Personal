import React from 'react';

import './styles/SalesList.css';

class SellListItem extends React.Component {
  render() {
    return (
      <div className="list-group list-group-horizontal">
        <span className="list-group-item SalesListItem">{this.props.sale.name}</span>
        <span className="list-group-item SalesListItem">{this.props.sale.count}</span>
        <span className="list-group-item SalesListItem">{this.props.sale.price}</span>
        <span className="list-group-item SalesListItem">{this.props.sale.price*this.props.sale.count}</span>
      </div>
    );
  }
}


function SalesList(props) {
  const sales = props.sales;
  let count = 1;
  if (sales.length === 0) {
    return (
      <>
        <h3>No hay Productos en el carro</h3>
      </>
    );
  }
  return (
    <div className="SalesList">
      <ul className="list-unstyled">
        <li key='0'>
          <div className="list-group list-group-horizontal">
            <span className="list-group-item SalesListItem"><strong>Nombre de Producto</strong></span>
            <span className="list-group-item SalesListItem"><strong>Precio Unidad</strong></span>
            <span className="list-group-item SalesListItem"><strong>Unidades</strong></span>
            <span className="list-group-item SalesListItem"><strong>Total</strong></span>
          </div>
        </li>
        {sales.map(sale => {
          return (
            <li key={count++}>
              <SellListItem sale={sale} />
            </li>
          );
        })}
      </ul>
      <h3>
        Total: {props.total}
      </h3>
    </div>
  );
}

export default SalesList;