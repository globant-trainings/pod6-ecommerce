import React from 'react';
import PropTypes from 'prop-types';
import FilterPrices from './FilterPrices';
import FilterSortby from './FilterSortby';
import './filtersidebar.css';

const FilterSidebar = ({
    prices,
    options,
    onChangePrice,
    onChangeSort
}) => {
    const handlePriceChange = (e) => {
        onChangePrice(e);
    }
    const handleSortChange = (e) => {
        onChangeSort(e);
    }
    return (
        <div data-testid="filters-sidebar">
            <FilterPrices prices={prices} onChange={handlePriceChange} />
            <FilterSortby options={options} onChange={handleSortChange} />
        </div>
    );
}

FilterSidebar.propTypes = {
    prices: PropTypes.array,
    options: PropTypes.array,
    onChangePrice: PropTypes.func.isRequired,
    onChangeSort: PropTypes.func.isRequired,
}


export default FilterSidebar;
