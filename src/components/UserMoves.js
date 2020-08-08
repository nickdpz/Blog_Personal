import React from 'react';
import './styles/SalesList.css';

class UserMovesItem extends React.Component {
  render() {
    return (
      <div className="list-group list-group-horizontal">
        <span className="list-group-item SalesListItem">{this.props.move.tdc}</span>
        <span className="list-group-item SalesListItem">{this.props.move.monto}</span>
        <span className="list-group-item SalesListItem">{this.props.move.date}</span>
      </div>
    );
  }
}


function UserMoves(props) {
  const moves = props.moves;
  let count = 1;
  if (moves.length === 0) {
    return (
      <>
        <h3>No hay Movimientos</h3>
      </>
    );
  }
  return (
    <div className="SalesList">

      <ul className="list-unstyled">
        <li key='0'>
          <div className="list-group list-group-horizontal">
            <span className="list-group-item SalesListItem"><strong>Medio de Pago</strong></span>
            <span className="list-group-item SalesListItem"><strong>Monto</strong></span>
            <span className="list-group-item SalesListItem"><strong>Hora</strong></span>
          </div>
        </li>
        {moves.map(move => {
          return (
            <li key={count++}>
              <UserMovesItem move={move} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserMoves;