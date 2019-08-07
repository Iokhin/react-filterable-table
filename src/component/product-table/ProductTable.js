import React from 'react';
import ProductRow from "../product-row/ProductRow";
import ProductCategoryRow from "../product-category-row/ProductCategoryRow";

export default class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;
        const filterText = this.props.filterText;
        const isStockedOnly = this.props.isStockedOnly;
        this.props.products.forEach(product => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (isStockedOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow key={product.category} category={product.category}/>)
            }
            rows.push(<ProductRow key={product.id} product={product}/>);
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}