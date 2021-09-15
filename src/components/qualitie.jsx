import React from 'react';
import PropTypes from 'prop-types';
const Qualititie = (props) => {
    return (
        <div>
            {props.qualities.map((item) => (
                <span className={'badge m-1 bg-' + item.color} key={item._id}>
                    {item.name}
                </span>
            ))}
        </div>
    );
};
Qualititie.propTypes = {
    qualities: PropTypes.array
};
export default Qualititie;
