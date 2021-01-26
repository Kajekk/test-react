import React from 'react';
import cx from 'classnames'
import {VISIBILITY_FILTERS} from '../constants'
import { connect } from 'react-redux'
import { setFilter } from '../redux/actions'

function VisibilityFilters({setFilter, activeFilter, currentFilter}) {
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
                        onClick={() => setFilter(currentFilter)}
                    >
                        {key}
                    </span>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    let activeFilter = state.visibilityFilter
    return {activeFilter}
}

export default connect(mapStateToProps, {setFilter})(VisibilityFilters)