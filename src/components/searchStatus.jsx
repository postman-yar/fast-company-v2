import React from 'react';
import PropTypes from 'prop-types';
const SearchStatus = (props) => {
    const getLabel = (count) => {
        const lastOne = Number(count.toString().slice(-1));
        if (count >= 5 && count <= 14) {
            return 'человек тусанет';
        }
        if ([2, 3, 4].indexOf(lastOne) >= 0) {
            return 'человека тусанут';
        }
        return 'человек тусанет';
    };
    return (
        <span
            className={
                'badge bg-' + (props.usersLength > 0 ? 'primary' : 'danger')
            }
        >
            {props.usersLength > 0
                ? `${props.usersLength} ${getLabel(
                    props.usersLength
                )} тусанет с тобой сегодня`
                : 'никто не тусанет с тобой сегодня'}
        </span>
    );
};
SearchStatus.propTypes = {
    usersLength: PropTypes.number.isRequired
};
export default SearchStatus;
