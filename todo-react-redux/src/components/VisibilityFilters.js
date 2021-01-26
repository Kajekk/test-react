import React from 'react';
import cx from 'classnames'
import {VISIBILITY_FILTERS} from '../constants'

function VisibilityFilters({activeFilter, submitFilter}) {
    return (
        <div className="visibility-filters">
            {Object.keys(VISIBILITY_FILTERS).map(key => {
                const currentFilter = VISIBILITY_FILTERS[key]
                return (
                    <span
                        key={`visibility-filter-${currentFilter}`}
                        className={cx(
                            "filter",
                            currentFilter === activeFilter && "filter--active"
                        )}
                        onClick={() => submitFilter(currentFilter)}
                    >
                        {key}
                    </span>
                )
            })}
        </div>
    )
}

export default VisibilityFilters