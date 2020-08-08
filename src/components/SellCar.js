import React, { Component } from 'react';

import './styles/SellCar.css';

class SellCar extends Component {
    render() {
        return (
            <div id="carrito" className="dropdown-menu" aria-labelledby="navbarCollapse">
                <table id="list-car" className="table">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsCar.map((item) => (
                            <tr>
                                <td>
                                    <img src={} width="100" />
                                </td>
                                <td>${item.title}</td>
                                <td>${item.price}</td>
                                <td>
                                    <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <a href="#" id="vaciar-carrito" class="btn btn-primary btn-block">Vaciar Carrito</a>
                <a href="#" id="procesar-pedido" class="btn btn-danger btn-block">Procesar
    Compra</a>
            </div>
        )
    }
}

export default SellCar;