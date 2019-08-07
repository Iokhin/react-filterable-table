import React from 'react';
import './ProductRow.css'

export default class ProductRow extends React.Component {
    render() {
        const product =this.props.product;
        return (
            <tr>
                <td className={product.stocked ? 'Stocked' : 'NotStocked'}>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}
