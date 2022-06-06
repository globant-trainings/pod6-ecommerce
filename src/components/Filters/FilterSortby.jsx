import React from 'react';
import PropTypes from 'prop-types';
import './filtersortby.css';

const FilterSortby = ({
    options,
    onChange
}) => {
    const handleChange = (e) => {
        onChange(e.currentTarget.value);
    }
    return (
        <select data-testid="options-select" onChange={handleChange}>
            {options.map((option, index) => {
                index += 1;
                return (
                    <option key={index} data-testid={"options-select-" + index} value={option}>
                        {option}
                    </option>
                );
            })}
        </select>
    );
}

FilterSortby.propTypes = {
    options: PropTypes.array,
    onChange: PropTypes.func.isRequired,
}


export default FilterSortby;
