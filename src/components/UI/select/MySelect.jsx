import React from 'react';

const MySelect = ({defaultOption, options, sortPosts}) => {
    return (
        <select onChange={(e) => sortPosts(e.target.value)}>
            <option
                disabled
                value=''
            >{defaultOption}
            </option>
            {options.map(option =>
                <option
                    key={option.value}
                    value={option.value}
                >{option.name}</option>
            )}
        </select>
    );
};

export default MySelect;