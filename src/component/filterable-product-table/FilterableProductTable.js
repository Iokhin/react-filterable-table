import React from 'react';
import SearchBar from "../search-bar/SearchBar";
import ProductTable from "../product-table/ProductTable";
import uuid from 'uuid/v1';
import randomWords from 'random-words';

export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            isStockedOnly: false
        };
    }

    filterTextChangeHandle = (filterText) => {
        this.setState({
            filterText: filterText
        });
    };

    isStockedOnlyChangeHandle = (isStockedOnly) => {
        this.setState({
            isStockedOnly: isStockedOnly
        });
    };

    render() {
        return (
            <div className="FilterableProductTable">
                <SearchBar filterText={this.state.filterText}
                           isStockedOnly={this.state.isStockedOnly}
                           onFilterTextChange={this.filterTextChangeHandle}
                           onIsStockedOnlyChange={this.isStockedOnlyChangeHandle}/>
                <ProductTable products={products}
                              filterText={this.state.filterText}
                              isStockedOnly={this.state.isStockedOnly} />
            </div>
        );
    }
}

const products = [
    {
        id: uuid(),
        name: randomWords(1).toString(),
        price: '100',
        category: randomWords(1).toString(),
        stocked: true
    },
    {
        id: uuid(),
        name: randomWords(1).toString(),
        price: '120',
        category: randomWords(1).toString(),
        stocked: true
    },
    {
        id: uuid(),
        name: randomWords(1).toString(),
        price: '120',
        category: randomWords(1).toString(),
        stocked: true
    },
    {
        id: uuid(),
        name: randomWords(1).toString(),
        price: '120',
        category: randomWords(1).toString(),
        stocked: true
    },
    {
        id: uuid(),
        name: randomWords(1).toString(),
        price: '120',
        category: randomWords(1).toString(),
        stocked: true
    },
    {
        id: uuid(),
        name: randomWords(1).toString(),
        price: '120',
        category: randomWords(1).toString(),
        stocked: true
    },
    {
        id: uuid(),
        name: 'Cat',
        price: '150',
        category: 'animal',
        stocked: true
    },
    {
        id: uuid(),
        name: 'Dog',
        price: '150',
        category: 'animal',
        stocked: false
    },
    {
        id: uuid(),
        name: 'Bob',
        price: '150',
        category: 'human',
        stocked: false
    },
    {
        id: uuid(),
        name: 'Bob',
        price: '150',
        category: 'human',
        stocked: false
    },
    {
        id: uuid(),
        name: 'Bob',
        price: '150',
        category: 'human',
        stocked: false
    }
];