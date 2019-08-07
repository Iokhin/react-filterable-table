import React from 'react';

export default class SearchBar extends React.Component {

    filterTextChangeHandle = (e) => {
        this.props.onFilterTextChange(e.target.value);
    };

    isStockedOnlyChangeHandle = (e) => {
        this.props.onIsStockedOnlyChange(e.target.checked);
    };

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Search..." onChange={this.filterTextChangeHandle}/>
                <br/>
                <label>
                    <input type="checkbox" checked={this.props.isStockedOnly} onChange={this.isStockedOnlyChangeHandle}/>
                    Search only stocked items
                </label>
            </div>
        );
    }
}